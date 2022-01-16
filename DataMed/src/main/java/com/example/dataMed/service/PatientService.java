package com.example.dataMed.service;

import com.example.dataMed.exceptions.EntityAlreadyExistException;
import com.example.dataMed.model.Doctor;
import com.example.dataMed.model.Patient;
import org.hibernate.PropertyValueException;

import java.sql.SQLIntegrityConstraintViolationException;

public interface PatientService {
    int getPatientRecord();

    Patient getPatient(Integer id);

    Patient createPatient(Patient patient);
}
