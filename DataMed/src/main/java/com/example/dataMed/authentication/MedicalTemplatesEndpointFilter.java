package com.example.dataMed.authentication;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;

public class MedicalTemplatesEndpointFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
	
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse= (HttpServletResponse) response;
		
		if (httpRequest.isUserInRole("ROLE_ADMIN")) {
			chain.doFilter(request, response);
			return;
		}
		
		if (httpRequest.isUserInRole("ROLE_DOCTOR")) {
			chain.doFilter(request, response);
			return;
		}
				
		String method = httpRequest.getMethod();
		
		if (HttpMethod.GET.toString().equals(method)) {
			chain.doFilter(request, response);
			return;
		}
			
		httpResponse.sendError(HttpStatus.FORBIDDEN.value());
		return;
	}
}
