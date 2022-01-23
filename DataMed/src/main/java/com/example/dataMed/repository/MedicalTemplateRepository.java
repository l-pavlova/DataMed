package com.example.dataMed.repository;

import com.example.dataMed.model.MedicalTemplate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalTemplateRepository extends JpaRepository<MedicalTemplate, Integer> {
    MedicalTemplate findByFileName(String filename);
    List<MedicalTemplate> findAll();
}
