package com.example.dataMed.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.dataMed.model.Patient;

public interface PatientService {

    Patient getPatient(Integer id);

    Patient createPatient(Patient patient);

    List<Patient> getAll();

    List<Patient> filterStatements(String firstName, String lastName, String egn);

    void addProfilePicture(Integer id, MultipartFile picture);

    Patient updatePatient(int id, Patient newPatient);
}
