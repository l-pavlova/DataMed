package com.example.dataMed.service;

import com.example.dataMed.model.MedicalTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface MedicalTemplateService {
  List<MedicalTemplate> getAllTemplates() throws IOException;
  MedicalTemplate getTemplate(String fileName);
  ResponseEntity addTemplate(MultipartFile template);

}
