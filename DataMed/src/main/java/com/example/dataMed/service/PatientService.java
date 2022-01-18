package com.example.dataMed.service;

import com.example.dataMed.dto.PatientDto;
import com.example.dataMed.model.Doctor;
import com.example.dataMed.model.Patient;
import com.example.dataMed.model.PatientRecord;
import org.hibernate.PropertyValueException;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

public interface PatientService {
    int getPatientRecord();

    Patient getPatient(Integer id);

    Patient createPatient(Patient patient);

    List<Patient> getAll();

    List<Patient> filterStatements(PatientDto patientDto);

    List<PatientRecord> getPatientRecords(Integer id);
}
