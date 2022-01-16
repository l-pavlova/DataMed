package com.example.dataMed.service;

import com.example.dataMed.exceptions.EntityAlreadyExistException;
import com.example.dataMed.model.Doctor;

import java.sql.SQLIntegrityConstraintViolationException;

public interface DoctorService {

//    ResponseEntity<DoctorDto> register(DoctorDto doctorDto);
//    ResponseEntity<DoctorDto> login(String username, String password);
//
    Doctor getDoctor(Integer id);

    Doctor createDoctor(Doctor doctor);
}
