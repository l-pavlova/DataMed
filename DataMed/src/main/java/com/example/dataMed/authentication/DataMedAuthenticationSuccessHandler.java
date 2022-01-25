package com.example.dataMed.authentication;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.node.TextNode;

public class DataMedAuthenticationSuccessHandler implements AuthenticationSuccessHandler{

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		response.setStatus(HttpStatus.OK.value());
		
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode principal = mapper.createObjectNode();
		principal.set("id", new TextNode(authentication.getName()));
		principal.set("role", new TextNode(authentication.getAuthorities().iterator().next().getAuthority()));
		
		response.setHeader(HttpHeaders.CONTENT_TYPE, "application/json");
		PrintWriter writer = response.getWriter();
		writer.write(principal.toString());
		writer.flush();
		writer.close();
	}
}
