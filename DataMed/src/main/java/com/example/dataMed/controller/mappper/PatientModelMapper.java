package com.example.dataMed.controller.mappper;

import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.dataMed.dto.PatientDto;
import com.example.dataMed.model.Patient;

public class PatientModelMapper {
	private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
	
	private ModelMapper modelMapper = new ModelMapper();
	
	public Patient mapFromDto(PatientDto patientDto) {
		Patient patient = this.modelMapper.map(patientDto, Patient.class);
		patient.setPassword(passwordEncoder.encode(patientDto.getPassword()));
		return patient;
	}

	public Patient mapFromDtoNullAsPass(PatientDto patientDto) {
		return this.modelMapper.map(patientDto, Patient.class);
	}


	public PatientDto mapToDto(Patient patient) {
		return this.modelMapper.map(patient, PatientDto.class);
	}
}
