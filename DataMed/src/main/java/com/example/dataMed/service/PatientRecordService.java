package com.example.dataMed.service;

import com.example.dataMed.model.PatientRecord;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PatientRecordService {
    PatientRecord getPatientRecord(Integer id, String filename);
    List<PatientRecord> getPatientRecords(Integer id);
    ResponseEntity addRecord(Integer id, MultipartFile file);
}
