package com.example.dataMed.controller;

import com.example.dataMed.dto.PatientRecordDto;
import com.example.dataMed.model.PatientRecord;
import com.example.dataMed.service.impl.PatientRecordImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.swing.text.DateFormatter;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class PatientRecordController {
    private ModelMapper modelMapper = new ModelMapper();

    @Autowired
    private PatientRecordImpl patientRecordImpl;

    @PostMapping("/uploadFile")
    public ResponseEntity<PatientRecordDto> uploadFile(@RequestParam("file") MultipartFile file) {
        PatientRecord fileName = patientRecordImpl.storeFile(DateFormatter.currentDate(),DateFormatter.currentDate(), file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName.getFileName())
                .toUriString();

        return new ResponseEntity<>(this.modelMapper.map(fileName, PatientRecordDto.class), HttpStatus.CREATED);
    }

    @PostMapping("/uploadMultipleFiles")
    public List<ResponseEntity<PatientRecordDto>> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
        return Arrays.stream(files)
                .map(this::uploadFile)
                .collect(Collectors.toList());
    }

    @GetMapping("/downloadFile/{fileName:.+}")
    public ResponseEntity <Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) throws FileNotFoundException {
        // Load file as Resource
        PatientRecord databaseFile = patientRecordImpl.getFile(fileName);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(databaseFile.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + databaseFile.getFileName() + "\"")
                .body(new ByteArrayResource(databaseFile.getData()));
    }
}
