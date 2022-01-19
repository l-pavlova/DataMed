package com.example.dataMed.service.impl;

import com.example.dataMed.dto.PatientDto;
import com.example.dataMed.model.Patient;
import com.example.dataMed.model.PatientRecord;
import com.example.dataMed.repository.PatientRecordRepository;
import com.example.dataMed.repository.PatientRepository;
import com.example.dataMed.service.PatientService;
import org.hibernate.PropertyValueException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PatientRecordRepository patientRecordRepository;

    @Override
    public Patient createPatient(Patient patient) {
//        Patient existingPatient = patientRepository.findByUsername(patient.getUsername());
//        if (existingPatient != null) {
//            throw new EntityAlreadyExistException("Patient already exists");
//        }
        return patientRepository.save(patient);

    }

    @Override
    public List<Patient> getAll() {
        return patientRepository.findAll();
    }

    @Override
    public List<Patient> filterStatements(PatientDto patientDto) {
        List<Patient> patients = new ArrayList<>();

        List<Patient> patientsByFirstName = new ArrayList<>();
        if (patientDto.getFirstName() != null) {
            patientsByFirstName = patientRepository.findByFirstName(patientDto.getFirstName());
            patients.addAll(patientsByFirstName);
        }

        List<Patient> patientsByLastName = new ArrayList<>();
        if (patientDto.getLastName() != null) {
            patientsByLastName = patientRepository.findByLastName(patientDto.getLastName());
            patients.addAll(patientsByLastName);
        }

        List<Patient> patientsByEgn = new ArrayList<>();
        if (patientDto.getEgn() != null) {
            patientsByEgn = patientRepository.findByEgn(patientDto.getEgn());
            patients.addAll(patientsByEgn);
        }

        if (patientsByEgn.size() != 0) {
            patients.retainAll(patientsByEgn);
        }
        if (patientsByFirstName.size() != 0) {
            patients.retainAll(patientsByFirstName);
        }
        if (patientsByLastName.size() != 0) {
            patients.retainAll(patientsByLastName);
        }
        Set<Patient> uniquePatients = new HashSet<>(patients);
        return new ArrayList<>(uniquePatients);
    }

    @Override
    public List<PatientRecord> getPatientRecords(Integer id) {
        return patientRepository.getById(id).getRecords();
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
