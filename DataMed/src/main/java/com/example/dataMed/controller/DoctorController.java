package com.example.dataMed.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dataMed.controller.mappper.DoctorModelMapper;
import com.example.dataMed.dto.DoctorDto;
import com.example.dataMed.model.Doctor;
import com.example.dataMed.service.DoctorService;

@RestController
@RequestMapping(value = "/doctors")//, produces = "application/json", consumes = "application/json"
public class DoctorController {
    @Autowired
    private DoctorService doctorService;
    
    private DoctorModelMapper modelMapper = new DoctorModelMapper();

    @GetMapping("/{id}")
    public ResponseEntity<DoctorDto> getDoctor(@PathVariable Integer id) {
        Doctor doctor = doctorService.getDoctor(id);
        return new ResponseEntity<>(this.modelMapper.mapToDto(doctor), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<DoctorDto> createDoctor(@RequestBody DoctorDto doctorDto) {
        Doctor doctor = modelMapper.mapFromDto(doctorDto);
        Doctor createdDoctor = doctorService.createDoctor(doctor);
        return new ResponseEntity<>(modelMapper.mapToDto(createdDoctor), HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<DoctorDto>> getAllDoctors() {
        List<Doctor> doctors = doctorService.getAll();
        List<DoctorDto> allDoctorsData = doctors.stream().map(this.modelMapper::mapToDto).collect(Collectors.toList());
        return new ResponseEntity<>(allDoctorsData, HttpStatus.OK);
    }


}
