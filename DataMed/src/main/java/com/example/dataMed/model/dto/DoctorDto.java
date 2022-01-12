package com.example.dataMed.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DoctorDto {
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private int age;
    private String phoneNumber;
    private String email;
    private String position;
    private String medicalUnit;
    private String hospital;
    private String certifications;
}
