package com.example.dataMed.controller;

import com.example.dataMed.dto.DoctorDto;
import com.example.dataMed.exceptions.EntityAlreadyExistException;
import com.example.dataMed.model.Doctor;
import com.example.dataMed.service.DoctorService;
import org.hibernate.PropertyValueException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;

@RestController
@RequestMapping(value = "/doctors")//, produces = "application/json", consumes = "application/json"
public class DoctorController {
    @Autowired
    private DoctorService doctorService;
    private ModelMapper modelMapper = new ModelMapper();;

    @GetMapping("/{id}")
    public ResponseEntity<DoctorDto> getDoctor(@PathVariable Integer id) {
        Doctor doctor = doctorService.getDoctor(id);
        return new ResponseEntity<>(this.modelMapper.map(doctor, DoctorDto.class), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<DoctorDto> createDoctor(@RequestBody DoctorDto doctorDto) {
        Doctor doctor = modelMapper.map(doctorDto, Doctor.class);
        Doctor createdDoctor = doctorService.createDoctor(doctor);
        return new ResponseEntity<>(modelMapper.map(createdDoctor, DoctorDto.class), HttpStatus.CREATED);

    }


}
