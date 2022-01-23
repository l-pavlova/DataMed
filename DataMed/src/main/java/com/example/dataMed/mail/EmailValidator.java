package com.example.dataMed.mail;

import java.io.*;
import java.net.*;
import java.nio.ByteBuffer;
import java.nio.channels.SocketChannel;
import java.util.Hashtable;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmailValidator {

    public static boolean isEmailValid(String mail) {
        Boolean isVerified = false;
        String key = "CTGCCAEMQ1TPDTJ7C5GL";

        try {
            Hashtable<String, String> requestParams = new Hashtable<String, String>();
            requestParams.put("format", "json");
            requestParams.put("email", mail);

            String pathRequestParams = "";
            for (Map.Entry<String, String> entry : requestParams.entrySet()) {
                pathRequestParams += "&" + entry.getKey() + "=" + URLEncoder.encode(entry.getValue(), "UTF-8");
            }
            String url = "api.mailboxvalidator.com";
            String path = "/v1/validation/single?key=" + key + pathRequestParams;
            SocketChannel channel = SocketChannel.open();
            channel.connect(new InetSocketAddress(url, 80));

            ByteBuffer buffer = ByteBuffer.allocate(1000);
            buffer.clear();
            String request = "GET " + path + " HTTP/1.1\n" + "Host: api.mailboxvalidator.com\n" + "\n";
            buffer.put(request.getBytes());
            buffer.flip();

            while(buffer.hasRemaining()) {
                channel.write(buffer);
            }
            buffer.clear();

            String output;
            while(true) {
                int count = channel.read(buffer);
                if (count > 10) {
                    output = new String(buffer.array());
                    break;
                }
                buffer.clear();
            }
            if (output.contains("is_verified")) {
                Matcher matcher = Pattern.compile("is_verified\":(\"True\"|\"False\")").matcher(output);
                if (matcher.find()) {
                    isVerified = Boolean.valueOf(matcher.group().split(":")[1].replaceAll("\"", ""));
                }
            }
            channel.close();
        } catch(IOException e){
            e.printStackTrace();
        }
        return isVerified;
    }
}
