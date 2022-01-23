package com.example.dataMed.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.dataMed.model.Doctor;

public interface DoctorService {

//    ResponseEntity<DoctorDto> register(DoctorDto doctorDto);
//    ResponseEntity<DoctorDto> login(String username, String password);
//
    Doctor getDoctor(Integer id);

    Doctor createDoctor(Doctor doctor);

    List<Doctor> getAll();

    void addProfilePicture(Integer id, MultipartFile picture);

    Doctor updateDoctor(int id, Doctor doctor);
}
