package com.example.dataMed.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

        return new ResponseEntity<>(records.stream().map(record -> modelMapper.map(record, PatientRecordDto.class)).collect(Collectors.toList()), 
        		HttpStatus.OK);
    }

    @RequestMapping(path = "/download", method = RequestMethod.GET)
    public ResponseEntity<ByteArrayResource> download(@RequestParam("filename") String filename,
                                                      @RequestParam("id") Integer id ) {

        PatientRecord record = patientRecordService.getPatientRecords(id, filename).get(0);
        ByteArrayResource resource = new ByteArrayResource(record.getData());

        return ResponseEntity.ok()
                .header("content-disposition", "attachment;filename=" + filename.toString())
                .contentLength(resource.contentLength())
                .contentType(MediaType.APPLICATION_PDF)
                .body(resource);
    }
}
