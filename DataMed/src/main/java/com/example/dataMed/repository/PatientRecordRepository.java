package com.example.dataMed.repository;

import com.example.dataMed.model.PatientRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRecordRepository extends JpaRepository<PatientRecord, Integer> {
}
