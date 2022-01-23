package com.example.dataMed.controller.mappper;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.dataMed.dto.PatientDto;
import com.example.dataMed.model.Patient;

@Component
public class PatientModelMapper {
	@Autowired
	private PasswordEncoder passwordEncoder;
	
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
