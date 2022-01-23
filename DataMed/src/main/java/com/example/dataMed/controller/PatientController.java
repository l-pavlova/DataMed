package com.example.dataMed.controller;

import java.util.List;
import java.util.stream.Collectors;

import com.example.dataMed.mail.EmailValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.dataMed.controller.mappper.PatientModelMapper;
import com.example.dataMed.dto.PatientDto;
import com.example.dataMed.model.Patient;
import com.example.dataMed.service.PatientService;


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
    public ResponseEntity createPatient(@RequestBody PatientDto patientDto) {
        Boolean isValid = EmailValidator.isEmailValid(patientDto.getEmail());
        if (!isValid) {
            return new ResponseEntity<>("Email is not valid", HttpStatus.UNAUTHORIZED);
        }
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
    public ResponseEntity<List<PatientDto>> getAllPatients(@RequestParam(required = false) String firstName,
                                                           @RequestParam(required = false) String lastName,
                                                           @RequestParam(required = false) String egn) {
    	List<Patient> patients;
    	if (firstName != null || lastName != null || egn != null) {
    		patients = patientService.filterStatements(firstName, lastName, egn);    		
    	} else {
    		patients = patientService.getAll();
    	}
    	
        List<PatientDto> allPatientsData = patients.stream().map(modelMapper::mapToDto).collect(Collectors.toList());
        return new ResponseEntity<>(allPatientsData, HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> addProfilePicture(@PathVariable int id,
                                            @RequestParam("picture") MultipartFile picture) {

        patientService.addProfilePicture(id, picture);
        return new ResponseEntity<>("Your picture is uploaded successfully!",
                HttpStatus.CREATED);
    }

}
