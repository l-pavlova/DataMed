package com.example.dataMed.repository;

import com.example.dataMed.model.MedicalTemplate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalTemplateRepository extends JpaRepository<MedicalTemplate, Integer> {
    MedicalTemplate findByFileName(String filename);
}
