package com.example.dataMed.service.impl;

import com.example.dataMed.exceptions.FileStorageException;
import com.example.dataMed.model.Doctor;
import com.example.dataMed.model.Patient;
import com.example.dataMed.model.PatientRecord;
import com.example.dataMed.repository.DoctorRepository;
import com.example.dataMed.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public Doctor createDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);

    }

    @Override
    public List<Doctor> getAll() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor getDoctor(Integer id) {
        return doctorRepository.findById(id).orElseThrow();
    }

    @Override
    public ResponseEntity addProfilePicture(Integer id, MultipartFile picture) {

        String fileName = StringUtils.cleanPath(picture.getOriginalFilename());
        try {
            Doctor doctor = doctorRepository.getById(id);
            doctor.setImage(picture.getBytes());
            doctorRepository.save(doctor);

        } catch (IOException e) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", e);
        }
        return new ResponseEntity<>("Your picture is uploaded successfully!",
                HttpStatus.CREATED);
    }

}
