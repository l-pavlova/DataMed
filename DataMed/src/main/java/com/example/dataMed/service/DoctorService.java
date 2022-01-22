package com.example.dataMed.service;

import com.example.dataMed.model.Doctor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface DoctorService {

//    ResponseEntity<DoctorDto> register(DoctorDto doctorDto);
//    ResponseEntity<DoctorDto> login(String username, String password);
//
    Doctor getDoctor(Integer id);

    Doctor createDoctor(Doctor doctor);

    List<Doctor> getAll();

    ResponseEntity addProfilePicture(Integer id, MultipartFile picture);

    Doctor updateDoctor(int id, Doctor doctor);
}
