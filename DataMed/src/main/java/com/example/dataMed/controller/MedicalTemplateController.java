package com.example.dataMed.controller;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.websocket.server.PathParam;

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

import com.example.dataMed.dto.MedicalTemplateDto;
import com.example.dataMed.model.MedicalTemplate;
import com.example.dataMed.service.MedicalTemplateService;

@RequestMapping(value = "/templates")
@RestController
public class MedicalTemplateController {
    private ModelMapper modelMapper = new ModelMapper();

    @Autowired
    private MedicalTemplateService medicalTemplateService;

    @GetMapping
    public ResponseEntity<List<MedicalTemplateDto>> getAllTemplates() throws IOException {
        List<MedicalTemplate> medicalTemplates = medicalTemplateService.getAllTemplates();
        List<MedicalTemplateDto> medicalTemplatesDto = Arrays.asList(modelMapper.map(medicalTemplates, MedicalTemplateDto[].class));
        return new ResponseEntity<>(medicalTemplatesDto, HttpStatus.CREATED);
    }

    @GetMapping("/{file}")
    public ResponseEntity<MedicalTemplateDto> getTemplate(@PathParam("file") String filename) {
        MedicalTemplate medicalTemplate = medicalTemplateService.getTemplate(filename);
        return new ResponseEntity<>(modelMapper.map(medicalTemplate, MedicalTemplateDto.class), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addTemplate(@RequestParam("file") MultipartFile file) {
        medicalTemplateService.addTemplate(file);
        return new ResponseEntity<>("Your template is uploaded successfully!",
                HttpStatus.CREATED);
    }
}
