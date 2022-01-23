package com.example.dataMed.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dataMed.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer> {
    Patient findByUsername(String username);
    List<Patient> findByFirstName(String firstName);
    List<Patient> findByLastName(String lastName);
    List<Patient> findByEgn(String egn);
}
