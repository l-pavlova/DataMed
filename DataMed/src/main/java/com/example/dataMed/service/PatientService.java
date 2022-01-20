package com.example.dataMed.service;

import com.example.dataMed.model.Patient;

import java.util.List;

public interface PatientService {

    Patient getPatient(Integer id);

    Patient createPatient(Patient patient);

    List<Patient> getAll();

    List<Patient> filterStatements(String firstName, String lastName, String egn);
}
