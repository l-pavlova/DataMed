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

public class PatientsEndpointFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse= (HttpServletResponse) response;
		
		if (httpRequest.isUserInRole("ROLE_ADMIN")) {
			chain.doFilter(request, response);
			return;
		}
		
		String method = httpRequest.getMethod();

		if (httpRequest.isUserInRole("ROLE_DOCTOR")) {
			if (HttpMethod.PATCH.toString().equals(method)) {
				httpResponse.sendError(HttpStatus.FORBIDDEN.value());
				return;
			}
			
			chain.doFilter(request, response);
			return;
		}
		
		String patientId = httpRequest.getUserPrincipal().getName();
		String[] path = httpRequest.getServletPath().split("/");
		String lastDirectory = path[path.length - 1];
		
		if (HttpMethod.GET.toString().equals(method) 
				|| HttpMethod.PUT.toString().equals(method) 
				|| HttpMethod.PATCH.toString().equals(method)) {
			if (!patientId.equals(lastDirectory)) {
				httpResponse.sendError(HttpStatus.FORBIDDEN.value());
				return;
			}
		}
			
		chain.doFilter(request, response);
	}

}
