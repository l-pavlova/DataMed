package com.example.dataMed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.dataMed.model.User;
import com.example.dataMed.repository.UserRepository;

@Service
public class DataMedUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(10);
	};
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		if (username.equals("user")) {
			return org.springframework.security.core.userdetails.User.builder()
					.username(username).password(passwordEncoder().encode("password")).authorities("USER").build();
		}
		
		User user =  userRepository.findByUsername(username);
		return org.springframework.security.core.userdetails.User.builder().username(username).password(user.getPassword()).authorities("USER").build();
	}
	
}
