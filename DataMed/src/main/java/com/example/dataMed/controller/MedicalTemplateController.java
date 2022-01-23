package com.example.dataMed.controller;

import com.example.dataMed.dto.MedicalTemplateDto;
import com.example.dataMed.model.MedicalTemplate;
import com.example.dataMed.service.MedicalTemplateService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@RequestMapping(value = "/template")
@RestController
public class MedicalTemplateController {
    private ModelMapper modelMapper = new ModelMapper();

    @Autowired
    private MedicalTemplateService medicalTemplateService;

    @GetMapping("/templates")
    public ResponseEntity getAllTemplates() throws IOException {
        List<MedicalTemplate> medicalTemplates = medicalTemplateService.getAllTemplates();
        List<MedicalTemplateDto> medicalTemplatesDto = Arrays.asList(modelMapper.map(medicalTemplates, MedicalTemplateDto[].class));
        return new ResponseEntity(medicalTemplatesDto, HttpStatus.CREATED);
    }

    @GetMapping("/template")
    public ResponseEntity<MedicalTemplateDto> getTemplate(@RequestParam("file") String filename) {
        MedicalTemplate medicalTemplate = medicalTemplateService.getTemplate(filename);
        return new ResponseEntity<>(modelMapper.map(medicalTemplate,MedicalTemplateDto.class), HttpStatus.OK);
    }

    @PostMapping("/uploadTemplate")
    public ResponseEntity addTemplate(@RequestParam("file") MultipartFile file) {
        return medicalTemplateService.addTemplate(file);
    }

    @RequestMapping(path = "/download", method = RequestMethod.GET)
    public ResponseEntity<ByteArrayResource> download(@RequestParam("filename") String filename) {

        MedicalTemplate medicalTemplate = medicalTemplateService.getTemplate(filename);
        ByteArrayResource resource = new ByteArrayResource(medicalTemplate.getData());
        return ResponseEntity.ok()
                .header("content-disposition", "attachment;filename=" + filename.toString())
                .contentLength(resource.contentLength())
                .contentType(MediaType.MULTIPART_FORM_DATA)
                .body(resource);
    }
}
