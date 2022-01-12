package com.example.dataMed.service;

import com.example.dataMed.dto.DoctorDto;
import org.springframework.http.ResponseEntity;

public interface DoctorService {

    ResponseEntity<DoctorDto> register(DoctorDto doctorDto);
    ResponseEntity<DoctorDto> login(String username, String password);
}
