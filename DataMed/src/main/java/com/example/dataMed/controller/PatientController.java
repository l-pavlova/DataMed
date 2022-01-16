package com.example.dataMed.controller;

import com.example.dataMed.dto.PatientDto;
import com.example.dataMed.exceptions.EntityAlreadyExistException;
import com.example.dataMed.model.Patient;
import com.example.dataMed.service.PatientService;
import org.hibernate.PropertyValueException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;

@RestController
@RequestMapping(value = "/patients")//, produces = "application/json", consumes = "application/json"
public class PatientController {
    @Autowired
    private PatientService patientService;
    private ModelMapper modelMapper = new ModelMapper();;

    @GetMapping("/{id}")
    public ResponseEntity<PatientDto> getPatient(@PathVariable Integer id) {
        Patient patient = patientService.getPatient(id);
        return new ResponseEntity<>(this.modelMapper.map(patient, PatientDto.class), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PatientDto> createPatient(@RequestBody PatientDto patientDto) {
        Patient patient = modelMapper.map(patientDto, Patient.class);
        Patient createdPatient = patientService.createPatient(patient);
        return new ResponseEntity<>(modelMapper.map(createdPatient, PatientDto.class), HttpStatus.CREATED);
    }
}
