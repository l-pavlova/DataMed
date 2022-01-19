package com.example.dataMed.controller;

import com.example.dataMed.dto.PatientRecordDto;
import com.example.dataMed.service.impl.PatientRecordImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;


@RestController
public class PatientRecordController {

    @Autowired
    private PatientRecordImpl patientRecordImpl;

    @PostMapping ("/uploadFile")
    public ResponseEntity addPatientRecord(@RequestBody MultipartFile file, Integer id) {
        return patientRecordImpl.addRecord(id, file);
    }

    @PostMapping("/uploadMultipleFiles")
    public List<ResponseEntity<PatientRecordDto>> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files,Integer id) {
        List<ResponseEntity<PatientRecordDto>> responseEntities = new ArrayList<>();
        for (MultipartFile file: files) {
           responseEntities.add(addPatientRecord(file,id));
        }
        return responseEntities;
    }
}
