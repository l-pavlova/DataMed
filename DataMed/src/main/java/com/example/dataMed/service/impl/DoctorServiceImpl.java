package com.example.dataMed.service.impl;

import com.example.dataMed.dto.DoctorDto;
import com.example.dataMed.model.Doctor;
import com.example.dataMed.repository.DoctorRepository;
import com.example.dataMed.service.DoctorAssembler;
import com.example.dataMed.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private DoctorAssembler doctorAssembler;

    @Override
    public ResponseEntity<DoctorDto> register(DoctorDto doctorDto) {
        Doctor existingDoctor = doctorRepository.findByFirstNameAndLastName(doctorDto.getFirstName(), doctorDto.getLastName());
        if(existingDoctor != null){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Doctor doc = doctorAssembler.toDoctor(doctorDto);
        doctorRepository.save(doc);
        return new ResponseEntity<>(doctorAssembler.toDoctorDto(doc), HttpStatus.CREATED);

    }

    @Override
    public ResponseEntity<DoctorDto> login(String username, String password) {
        Doctor doc = doctorRepository.findByUsername(username);
        if(doc == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
//todo: add auth step
        return new ResponseEntity<>(doctorAssembler.toDoctorDto(doc),HttpStatus.OK);
    }
}
