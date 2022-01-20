package com.example.dataMed.controller.mappper;

import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.dataMed.dto.DoctorDto;
import com.example.dataMed.model.Doctor;

public class DoctorModelMapper {
	private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
	
	private ModelMapper modelMapper = new ModelMapper();
	
	public Doctor mapFromDto(DoctorDto doctorDto) {
		Doctor doctor = this.modelMapper.map(doctorDto, Doctor.class);
		doctor.setPassword(passwordEncoder.encode(doctorDto.getPassword()));
		return doctor;
	}

	public Doctor mapFromDtoNullAsPass(DoctorDto doctorDto) {
		Doctor doctor = this.modelMapper.map(doctorDto, Doctor.class);
		return doctor;
	}


	public DoctorDto mapToDto(Doctor doctor) {
		return this.modelMapper.map(doctor, DoctorDto.class);
	}
}
