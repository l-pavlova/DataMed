package com.example.dataMed.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.AutowireCapableBeanFactory;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private DataMedUserDetailsService userDetailsService;
	
	@Autowired
	private AutowireCapableBeanFactory beanFactory;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		DataMedAuthenticationFilter authenticationFilter = new DataMedAuthenticationFilter();
		authenticationFilter.setAuthenticationManager(authenticationManager());
		
		http.csrf().disable()
		.addFilterAt(authenticationFilter, UsernamePasswordAuthenticationFilter.class)
		.authorizeRequests()
		.antMatchers(HttpMethod.POST, "/login", "/doctors", "/patients").permitAll()
		.anyRequest().authenticated();
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService);
	}
	
	@Bean 
	public FilterRegistrationBean<DoctorsEndpointFilter> doctorsEndpointFilter() {
		FilterRegistrationBean<DoctorsEndpointFilter> registration = new FilterRegistrationBean<>();
		DoctorsEndpointFilter doctorsEndpointFilter = new DoctorsEndpointFilter();
        beanFactory.autowireBean(doctorsEndpointFilter);
        registration.setFilter(doctorsEndpointFilter);
        registration.addUrlPatterns("/doctors/*");
        return registration;
	}
}