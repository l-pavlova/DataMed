package com.example.dataMed.repository;

import com.example.dataMed.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Integer> {
    Patient findByUsername(String username);
}
