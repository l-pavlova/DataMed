package com.example.dataMed.controller;

import com.example.dataMed.dto.DoctorDto;
import com.example.dataMed.dto.PatientDto;
import com.example.dataMed.exceptions.EntityAlreadyExistException;
import com.example.dataMed.model.Doctor;
import com.example.dataMed.model.Patient;
import com.example.dataMed.model.PatientRecord;
import com.example.dataMed.service.PatientService;
import org.hibernate.PropertyValueException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Arrays;
import java.util.List;

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

//    @GetMapping
//    public ResponseEntity<PatientDto> searchPatient(@RequestBody PatientDto) {
//        Doctor doctor = patientService.searchPateints(PatientDto);
//        return new ResponseEntity<>(this.modelMapper.map(doctor, DoctorDto.class), HttpStatus.OK);
//    }

    @GetMapping("/all")
    public ResponseEntity<List<PatientDto>> getAllPatients() {
        List<Patient> patients = patientService.getAll();
        List<PatientDto> allPatientsData = Arrays.asList(modelMapper.map(patients, PatientDto[].class));
        return new ResponseEntity<>(allPatientsData, HttpStatus.OK);
    }

    @GetMapping("/find")
    public ResponseEntity<List<PatientDto>> getAllPatients(@RequestBody PatientDto patientDto) {
        List<Patient> patients = patientService.filterStatements(patientDto);
        List<PatientDto> allPatientsData = Arrays.asList(modelMapper.map(patients, PatientDto[].class));
        return new ResponseEntity<>(allPatientsData, HttpStatus.OK);
    }

    // for debugging purposes
    @GetMapping("/records")
    public ResponseEntity<List<PatientRecord>> getPatientRecords(@RequestBody PatientDto patientDto) {
        List<PatientRecord> records = patientService.getPatientRecords(patientDto.getId());
        return new ResponseEntity<>(records, HttpStatus.OK);
    }



}
