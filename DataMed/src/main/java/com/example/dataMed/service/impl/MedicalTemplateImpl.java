package com.example.dataMed.service.impl;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.dataMed.exceptions.FileStorageException;
import com.example.dataMed.model.MedicalTemplate;
import com.example.dataMed.repository.MedicalTemplateRepository;
import com.example.dataMed.service.MedicalTemplateService;


@Service
public class MedicalTemplateImpl implements MedicalTemplateService {
    private Date date = new Date();
    private SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

    @Autowired
    ResourcePatternResolver resourceResolver;

    @Autowired
    private MedicalTemplateRepository medicalTemplateRepository;

    public List<MedicalTemplate> getAllTemplates() throws IOException {
        List<MedicalTemplate> medicalTemplates = new ArrayList<>();
        Resource[] resources = resourceResolver.getResources("classpath*:templates/*.dotx");
        for (Resource res : resources) {
            File template = res.getFile();
            MedicalTemplate newTemplate = new MedicalTemplate(template.getName(),
                    formatter.format(date),
                    Files.readAllBytes(template.toPath()));
           if (medicalTemplateRepository.findByFileName(template.getName()) == null){
               medicalTemplates.add(newTemplate);
               medicalTemplateRepository.save(newTemplate);
           }
        }
        return medicalTemplateRepository.findAll();
    }

    @Override
    public MedicalTemplate getTemplate(String fileName) {
        return medicalTemplateRepository.findByFileName(fileName);
    }

    @Override
    public void addTemplate(MultipartFile template) {
        String fileName = StringUtils.cleanPath(template.getOriginalFilename());
        try {
            if (medicalTemplateRepository.findByFileName(template.getName()) == null){
                MedicalTemplate newTemplate = new MedicalTemplate(fileName, formatter.format(date), template.getBytes());
                medicalTemplateRepository.save(newTemplate);
            }
        } catch (IOException e) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", e);
        }
    }
}
