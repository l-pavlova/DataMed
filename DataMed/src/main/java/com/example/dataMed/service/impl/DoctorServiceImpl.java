package com.example.dataMed.service.impl;

import com.example.dataMed.exceptions.EntityAlreadyExistException;
import com.example.dataMed.model.Doctor;
import com.example.dataMed.repository.DoctorRepository;
import com.example.dataMed.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLIntegrityConstraintViolationException;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public Doctor createDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);

    }

    @Override
    public Doctor getDoctor(Integer id) {
        return doctorRepository.findById(id).orElseThrow();
    }

}
