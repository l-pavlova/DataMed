package com.example.dataMed.controller;

import com.example.dataMed.dto.PatientRecordDto;
import com.example.dataMed.model.PatientRecord;
import com.example.dataMed.service.PatientRecordService;
import com.example.dataMed.service.PatientService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RequestMapping(value = "/patient-records")
@RestController
public class PatientRecordController {
    private ModelMapper modelMapper = new ModelMapper();

    @Autowired
    private PatientService patientService;

    @Autowired
    private PatientRecordService patientRecordService;

    @PostMapping ("/uploadFile")
    public ResponseEntity addPatientRecord(@RequestBody MultipartFile file, Integer id) {
        return patientRecordService.addRecord(id, file);
    }

    @PostMapping("/uploadMultipleFiles")
    public List<ResponseEntity<PatientRecordDto>> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files,Integer id) {
        List<ResponseEntity<PatientRecordDto>> responseEntities = new ArrayList<>();
        for (MultipartFile file: files) {
           responseEntities.add(addPatientRecord(file,id));
        }
        return responseEntities;
    }

    @GetMapping("/records")
    public ResponseEntity<List<PatientRecordDto>> getPatientRecords(@RequestParam("id") Integer id) {
        List<PatientRecord> records =  patientRecordService.getPatientRecords(id);
        List<PatientRecordDto> allPatientsData = Arrays.asList(modelMapper.map(records, PatientRecordDto[].class));

        return new ResponseEntity<>(allPatientsData, HttpStatus.OK);
    }

    @GetMapping("/record")
    public ResponseEntity<PatientRecord> getPatientRecord(@RequestParam("id") Integer id, @RequestParam("filename")String filename) {
        PatientRecord record =  patientRecordService.getPatientRecord(id, filename);

        return new ResponseEntity<>(record, HttpStatus.OK);
    }
}
