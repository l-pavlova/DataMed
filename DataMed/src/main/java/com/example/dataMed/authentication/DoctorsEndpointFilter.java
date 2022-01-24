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

public class DoctorsEndpointFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse= (HttpServletResponse) response;
		
		String method = httpRequest.getMethod();
		if (HttpMethod.POST.toString().equals(method)) {
			chain.doFilter(request, response);
			return;
		}
		
		if (httpRequest.getUserPrincipal() == null) {
			httpResponse.sendError(HttpStatus.FORBIDDEN.value());
			return;
		}
		
		if (httpRequest.isUserInRole("ROLE_ADMIN")) {
			chain.doFilter(request, response);
			return;
		}
		
		if (httpRequest.isUserInRole("ROLE_PATIENT")) {
			httpResponse.sendError(HttpStatus.FORBIDDEN.value());
			return;
		}
		
		String doctorId = httpRequest.getUserPrincipal().getName();
		String[] path = httpRequest.getServletPath().split("/");
		String lastDirectory = path[path.length - 1];
		
		if (HttpMethod.GET.toString().equals(method) 
				|| HttpMethod.PUT.toString().equals(method) 
				|| HttpMethod.PATCH.toString().equals(method)) {
			if (!doctorId.equals(lastDirectory)) {
				httpResponse.sendError(HttpStatus.FORBIDDEN.value());
				return;
			}
		}
			
		chain.doFilter(request, response);
	}

}
