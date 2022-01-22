package com.example.dataMed.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.dataMed.model.Doctor;
import com.example.dataMed.model.Patient;
import com.example.dataMed.repository.DoctorRepository;
import com.example.dataMed.repository.PatientRepository;

@Service
public class DataMedUserDetailsService implements UserDetailsService {

	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private PatientRepository patientRepository;
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(10);
	};
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		if (username.equals("user")) {
			return org.springframework.security.core.userdetails.User.builder()
					.username(username).password(passwordEncoder().encode("password")).authorities("ADMIN").build();
		}
		
		Doctor doctor =  doctorRepository.findByUsername(username);
		if (doctor != null) {
			return User.builder().username(username).password(doctor.getPassword()).authorities("DOCTOR").build();			
		}
		
		Patient patient =  patientRepository.findByUsername(username);
		if (patient != null) {
			return User.builder().username(username).password(patient.getPassword()).authorities("PATIENT").build();			
		}
		
		throw new UsernameNotFoundException(username);
	}
	
}
