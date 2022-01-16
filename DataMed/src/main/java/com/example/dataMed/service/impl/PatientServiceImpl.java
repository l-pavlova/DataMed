package com.example.dataMed.service.impl;

import com.example.dataMed.exceptions.EntityAlreadyExistException;
import com.example.dataMed.model.Patient;
import com.example.dataMed.repository.PatientRepository;
import com.example.dataMed.service.PatientService;
import org.hibernate.PropertyValueException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLIntegrityConstraintViolationException;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public Patient createPatient(Patient patient) {
//        Patient existingPatient = patientRepository.findByUsername(patient.getUsername());
//        if (existingPatient != null) {
//            throw new EntityAlreadyExistException("Patient already exists");
//        }
        return patientRepository.save(patient);

    }

    @Override
    public int getPatientRecord() {
        return 0;
    }

    @Override
    public Patient getPatient(Integer id) {
        return patientRepository.findById(id).orElseThrow();
    }
}
