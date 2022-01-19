package com.example.dataMed.service.impl;

import com.example.dataMed.exceptions.FileStorageException;
import com.example.dataMed.model.Patient;
import com.example.dataMed.model.PatientRecord;
import com.example.dataMed.repository.PatientRecordRepository;
import com.example.dataMed.repository.PatientRepository;
import com.example.dataMed.service.PatientRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PatientRecordImpl implements PatientRecordService {
    private Date date = new Date();
    private SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

    @Autowired
    private PatientRecordRepository patientRecordRepository;
    @Autowired
    private PatientRepository patientRepository;

    public ResponseEntity addRecord(int id, MultipartFile file) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            Patient patient = patientRepository.getById(id);
            PatientRecord record = new PatientRecord(fileName, formatter.format(date), formatter.format(date), file.getBytes(), patient);
            patientRecordRepository.save(record);

        } catch (IOException e) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", e);
        }
        return new ResponseEntity<>("Your picture is uploaded successfully!",
                HttpStatus.OK);
    }

    //this is not working atm, will fix it
/*
    public PatientRecord getPatientRecord(String filename ) throws FileNotFoundException {
        return patientRecordRepository.findById(fileId)
                .orElseThrow(() -> new FileNotFoundException("File not found with id " + fileId));
    }
 */
}

