package com.example.dataMed.controller;

import com.example.dataMed.dto.PatientRecordDto;
import com.example.dataMed.model.MedicalTemplate;
import com.example.dataMed.model.PatientRecord;
import com.example.dataMed.service.PatientRecordService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
    private PatientRecordService patientRecordService;

    @PostMapping ("/uploadFile")
    public ResponseEntity addPatientRecord(@RequestParam("file") MultipartFile file, @RequestParam("id") Integer id) {
        return patientRecordService.addRecord(id, file);
    }

    @PostMapping("/uploadMultipleFiles")
    public List<ResponseEntity<PatientRecordDto>> addMultipleRecords(@RequestParam("files") MultipartFile[] files,
                                                                     @RequestParam("id") Integer id) {
        List<ResponseEntity<PatientRecordDto>> responseEntities = new ArrayList<>();
        for (MultipartFile file : files) {
            responseEntities.add(addPatientRecord(file, id));
        }
        return responseEntities;
    }

    @GetMapping("/records")
    public ResponseEntity<List<PatientRecordDto>> getPatientRecords(@RequestParam("id") Integer id) {
        List<PatientRecord> records = patientRecordService.getPatientRecords(id);
        List<PatientRecordDto> allPatientRecords = Arrays.asList(modelMapper.map(records, PatientRecordDto[].class));

        return new ResponseEntity<>(allPatientRecords, HttpStatus.OK);
    }

    @GetMapping("/record")
    public ResponseEntity<PatientRecordDto> getPatientRecord(@RequestParam("id") Integer id,
                                                             @RequestParam("filename") String filename) {
        PatientRecord record = patientRecordService.getPatientRecord(id, filename);

        return new ResponseEntity<>(modelMapper.map(record, PatientRecordDto.class), HttpStatus.OK);
    }

    @RequestMapping(path = "/download", method = RequestMethod.GET)
    public ResponseEntity<ByteArrayResource> download(@RequestParam("filename") String filename,
                                                      @RequestParam("id") Integer id ) {

        PatientRecord record = patientRecordService.getPatientRecord(id, filename);
        ByteArrayResource resource = new ByteArrayResource(record.getData());

        return ResponseEntity.ok()
                .contentLength(resource.contentLength())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(resource);
    }
}
