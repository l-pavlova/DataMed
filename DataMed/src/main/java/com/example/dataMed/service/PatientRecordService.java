package com.example.dataMed.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.dataMed.model.PatientRecord;

public interface PatientRecordService {
	List<PatientRecord> getPatientRecords(Integer id, String filename);
    void addRecord(Integer id, MultipartFile file);
}
