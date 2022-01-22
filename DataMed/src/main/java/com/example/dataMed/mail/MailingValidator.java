package com.example.dataMed.mail;

import java.io.*;
import java.net.*;
import java.nio.ByteBuffer;
import java.nio.channels.SocketChannel;
import java.util.Hashtable;
import java.util.Map;

public class MailingValidator {

    public static boolean validateEmail(String mail) {
        Boolean isVerified = false;
        String key = "CTGCCAEMQ1TPDTJ7C5GL";

        try {
            Hashtable<String, String> data = new Hashtable<String, String>();
            data.put("format", "json");
            data.put("email", mail);

            String datastr = "";
            for (Map.Entry<String, String> entry : data.entrySet()) {
                datastr += "&" + entry.getKey() + "=" + URLEncoder.encode(entry.getValue(), "UTF-8");
            }
            String url = "api.mailboxvalidator.com";
            String path = "/v1/validation/single?key=" + key + datastr;
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
            System.out.println(output);
            if (output.contains("is_verified")) {
                isVerified = Boolean.valueOf(output.split("is_verified")[1].split(",")[0].split(":")[1].split("\"")[1].toLowerCase());
            }
            channel.close();
        } catch(IOException e){
            e.printStackTrace();
        }
        return isVerified;
    }

//    public static boolean isEmailValid(String email) {
//        try {
//            String key = "CTGCCAEMQ1TPDTJ7C5GL";
//            Hashtable<String, String> data = new Hashtable<String, String>();
//            data.put("format", "json");
//            data.put("email", "vasil.n.v.1999@gmail.com");
//
//            String datastr = "";
//            for (Map.Entry<String, String> entry : data.entrySet()) {
//                datastr += "&" + entry.getKey() + "=" + URLEncoder.encode(entry.getValue(), "UTF-8");
//            }
//            URL url = new URL("https://api.mailboxvalidator.com/v1/validation/single?key=" + key + datastr);
//
//            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//            conn.setRequestMethod("GET");
//            conn.setRequestProperty("Accept", "application/json");
//
//            if (conn.getResponseCode() != 200) {
//                throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
//            }
//
//            BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
//
//            String output;
//
//            while ((output = br.readLine()) != null) {
//                System.out.println(output);
//                Boolean isVerified = Boolean.valueOf(output.split("is_verified")[1].split(",")[0].split(":")[1].split("\"")[1].toLowerCase());
//                return isVerified;
//            }
//            conn.disconnect();
//            return false;
//        } catch(IOException e){
//            e.printStackTrace();
//        }
//        return false;
//    }

}
