package com.example.dataMed.service.impl;

import com.example.dataMed.exceptions.FileStorageException;
import com.example.dataMed.model.Patient;
import com.example.dataMed.repository.PatientRepository;
import com.example.dataMed.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    public List<Patient> getAll() {
        return patientRepository.findAll();
    }

    @Override
    public List<Patient> filterStatements(String firstName, String lastName, String egn) {
        List<Patient> patients = new ArrayList<>();

        List<Patient> patientsByFirstName = new ArrayList<>();
        if (firstName.length() != 0) {
            patientsByFirstName = patientRepository.findByFirstName(firstName);
            patients.addAll(patientsByFirstName);
        }

        List<Patient> patientsByLastName = new ArrayList<>();
        if (lastName.length() != 0) {
            patientsByLastName = patientRepository.findByLastName(lastName);
            patients.addAll(patientsByLastName);
        }

        List<Patient> patientsByEgn = new ArrayList<>();
        if (egn.length() != 0) {
            patientsByEgn = patientRepository.findByEgn(egn);
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
    public Patient getPatient(Integer id) {
        return patientRepository.findById(id).orElseThrow();
    }

    @Override
    public ResponseEntity addProfilePicture(Integer id, MultipartFile picture) {

        String fileName = StringUtils.cleanPath(picture.getOriginalFilename());
        try {
            Patient patient = patientRepository.getById(id);
            patient.setImage(picture.getBytes());
            patientRepository.save(patient);

        } catch (IOException e) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", e);
        }
        return new ResponseEntity<>("Your picture is uploaded successfully!",
                HttpStatus.CREATED);
    }

    @Override
    public Patient updatePatient(int id, Patient patient) {
        Patient curr = patientRepository.getById(id);
        patient.setRecords(curr.getRecords());
        patient.setUsername(curr.getUsername());
        patient.setImage(curr.getImage());

        if (patient.getPassword() != null) {
            return  patientRepository.save(patient);
        }

        String currPass = patientRepository.getById(id).getPassword();
        patient.setPassword(currPass);
        return patientRepository.save(patient);
    }
}
