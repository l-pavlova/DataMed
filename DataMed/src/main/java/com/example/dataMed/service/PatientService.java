package com.example.dataMed.service;

import com.example.dataMed.dto.PatientDto;
import com.example.dataMed.model.Patient;
import com.example.dataMed.model.PatientRecord;

import java.util.List;

public interface PatientService {
    int getPatientRecord();

    Patient getPatient(Integer id);

    Patient createPatient(Patient patient);

    List<Patient> getAll();

    List<Patient> filterStatements(String firstName, String lastName, String egn);

    List<PatientRecord> getPatientRecords(Integer id);
}
