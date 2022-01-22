package com.example.dataMed.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.dataMed.dto.PatientRecordDto;
import com.example.dataMed.model.PatientRecord;
import com.example.dataMed.service.PatientRecordService;

@RequestMapping(value = "/patient-records")
@RestController
public class PatientRecordController {
    private ModelMapper modelMapper = new ModelMapper();

    @Autowired
    private PatientRecordService patientRecordService;

    @PostMapping
    public ResponseEntity<String> addPatientRecord(@RequestParam("file") MultipartFile file, @RequestParam("id") Integer id) {
        patientRecordService.addRecord(id, file);
        return new ResponseEntity<>("Your picture is uploaded successfully!",
                HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<PatientRecordDto>> getPatientRecords(@RequestParam("id") Integer id,
                                                             @RequestParam(required = false) String filename) {
        List<PatientRecord> records = patientRecordService.getPatientRecords(id, filename);

        return new ResponseEntity<>(records.stream().map(record -> modelMapper.map(records, PatientRecordDto.class)).collect(Collectors.toList()), 
        		HttpStatus.OK);
    }
}
