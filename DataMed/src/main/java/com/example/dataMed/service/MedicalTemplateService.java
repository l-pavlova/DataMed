package com.example.dataMed.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.dataMed.model.MedicalTemplate;

public interface MedicalTemplateService {
  List<MedicalTemplate> getAllTemplates() throws IOException;
  MedicalTemplate getTemplate(String fileName);
  void addTemplate(MultipartFile template);

}
