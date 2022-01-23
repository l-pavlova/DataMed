package com.example.dataMed.service.impl;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.dataMed.exceptions.FileStorageException;
import com.example.dataMed.model.Doctor;
import com.example.dataMed.repository.DoctorRepository;
import com.example.dataMed.service.DoctorService;

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
    public void addProfilePicture(Integer id, MultipartFile picture) {

        String fileName = StringUtils.cleanPath(picture.getOriginalFilename());
        try {
            Doctor doctor = doctorRepository.getById(id);
            doctor.setImage(picture.getBytes());
            doctorRepository.save(doctor);

        } catch (IOException e) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", e);
        }
    }

    @Override
    public Doctor updateDoctor(int id, Doctor doctor) {
        if (doctor.getPassword() != null) {
            return  doctorRepository.save(doctor);
        }
        String currPass = doctorRepository.getById(id).getPassword();
        doctor.setPassword(currPass);
        return  doctorRepository.save(doctor);
    }

}
