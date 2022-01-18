package com.example.dataMed.service.impl;

import com.example.dataMed.model.PatientRecord;
import com.example.dataMed.repository.PatientRecordRepository;
import com.example.dataMed.service.PatientRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;

@Service
public class PatientRecordImpl implements PatientRecordServiceg {

    @Autowired
    private PatientRecordRepository patientRecordRepository;

    public PatientRecord storeFile(String created, String modified, MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if (fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }
            PatientRecord record = new PatientRecord(fileName, file.getContentType(), created, modified, file.getBytes());

            return patientRecordRepository.save(record);
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

    public PatientRecord getFile(String fileId) throws FileNotFoundException {
        return patientRecordRepository.findById(fileId)
                .orElseThrow(() -> new FileNotFoundException("File not found with id " + fileId));
    }
}

