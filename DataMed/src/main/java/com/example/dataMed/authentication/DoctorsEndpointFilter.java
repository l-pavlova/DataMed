//package com.example.dataMed.authentication;
//
//import java.io.IOException;
//
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.http.HttpServletRequest;
//
//import org.springframework.http.HttpMethod;
//
//public class DoctorsEndpointFilter implements Filter {
//
//	@Override
//	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
//			throws IOException, ServletException {
//		HttpServletRequest httpRequest = (HttpServletRequest) request;
//		
//		if (httpRequest.isUserInRole("ADMIN")) {
//			return;
//		}
//		
//		String method = httpRequest.getMethod();
//		
//		if (method.equals(HttpMethod.))
//		
//		
//	}
//
//}
