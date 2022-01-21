package com.example.dataMed.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.dataMed.controller.mappper.PatientModelMapper;
import com.example.dataMed.dto.PatientDto;
import com.example.dataMed.model.Patient;
import com.example.dataMed.service.PatientService;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping(value = "/patients")//, produces = "application/json", consumes = "application/json"
public class PatientController {
    @Autowired
    private PatientService patientService;

    private PatientModelMapper modelMapper = new PatientModelMapper();

    @GetMapping("/{id}")
    public ResponseEntity<PatientDto> getPatient(@PathVariable Integer id) {
        Patient patient = patientService.getPatient(id);
        return new ResponseEntity<>(this.modelMapper.mapToDto(patient), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PatientDto> createPatient(@RequestBody PatientDto patientDto) {
        Patient patient = modelMapper.mapFromDto(patientDto);
        Patient createdPatient = patientService.createPatient(patient);
        return new ResponseEntity<>(modelMapper.mapToDto(createdPatient), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PatientDto> updatePatient(@PathVariable int id, @RequestBody PatientDto patientDto) {
        Patient newPatient = patientDto.getPassword() == null ?
                modelMapper.mapFromDtoNullAsPass(patientDto) : modelMapper.mapFromDto(patientDto);
        Patient updated = patientService.updatePatient(id, newPatient);

        return new ResponseEntity<>(this.modelMapper.mapToDto(updated), HttpStatus.OK);
    }


//    @GetMapping
//    public ResponseEntity<PatientDto> searchPatient(@RequestBody PatientDto) {
//        Doctor doctor = patientService.searchPateints(PatientDto);
//        return new ResponseEntity<>(this.modelMapper.map(doctor, DoctorDto.class), HttpStatus.OK);
//    }

    @GetMapping
    public ResponseEntity<List<PatientDto>> getAllPatients() {
        List<Patient> patients = patientService.getAll();
        List<PatientDto> allPatientsData = patients.stream().map(modelMapper::mapToDto).collect(Collectors.toList());
        return new ResponseEntity<>(allPatientsData, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<PatientDto>> getAllPatients(@RequestParam String firstName,
                                                           @RequestParam String lastName,
                                                           @RequestParam String egn) {
        List<Patient> patients = patientService.filterStatements(firstName, lastName, egn);
        List<PatientDto> allPatientsData = patients.stream().map(modelMapper::mapToDto).collect(Collectors.toList());
        return new ResponseEntity<>(allPatientsData, HttpStatus.OK);
    }

    @PatchMapping
    public ResponseEntity<?> addProfilePicture(@RequestParam("id") Integer id,
                                            @RequestParam("picture") MultipartFile picture) {

        return patientService.addProfilePicture(id, picture);
    }

}
