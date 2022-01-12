package com.example.dataMed.service;

import com.example.dataMed.dto.DoctorDto;
import com.example.dataMed.model.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DoctorAssembler {
    //todo; add pass checks
    public Doctor toDoctor(DoctorDto doctorDto) {
        var doc = new Doctor();
        doc.setUsername(doctorDto.getUsername());
        doc.setPassword(doctorDto.getPassword());//todo:encript
        doc.setFirstName(doctorDto.getFirstName());
        doc.setLastName(doctorDto.getLastName());
        doc.setAge(doctorDto.getAge());
        doc.setPhoneNumber(doctorDto.getPhoneNumber());
        doc.setEmail(doctorDto.getEmail());
        doc.setPosition(doctorDto.getPosition());
        doc.setMedicalUnit(doctorDto.getMedicalUnit());
        doc.setHospital(doctorDto.getHospital());
        doc.setCertifications(doctorDto.getCertifications());

        return doc;
    }

    public DoctorDto toDoctorDto(Doctor doctor) {
        var docDto = new DoctorDto();
        docDto.setUsername(doctor.getUsername());
        docDto.setPassword(doctor.getPassword());
        docDto.setFirstName(doctor.getFirstName());
        docDto.setLastName(doctor.getLastName());
        docDto.setAge(doctor.getAge());
        docDto.setPhoneNumber(doctor.getPhoneNumber());
        docDto.setEmail(doctor.getEmail());
        docDto.setPosition(doctor.getPosition());
        docDto.setMedicalUnit(doctor.getMedicalUnit());
        docDto.setHospital(doctor.getHospital());
        docDto.setCertifications(doctor.getCertifications());

        return docDto;
    }
}

