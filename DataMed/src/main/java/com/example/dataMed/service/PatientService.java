package com.example.dataMed.service;

import com.example.dataMed.model.Patient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PatientService {

    Patient getPatient(Integer id);

    Patient createPatient(Patient patient);

    List<Patient> getAll();

    List<Patient> filterStatements(String firstName, String lastName, String egn);

    ResponseEntity addProfilePicture(Integer id, MultipartFile picture);

    Patient updatePatient(int id, Patient newPatient);
}
