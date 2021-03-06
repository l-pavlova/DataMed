package com.example.dataMed.repository;

import com.example.dataMed.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

    Doctor findByFirstNameAndLastName(String firstName, String lastName);

    Doctor findByUsername(String userName);
}
