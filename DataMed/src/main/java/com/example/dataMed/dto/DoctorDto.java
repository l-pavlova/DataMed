package com.example.dataMed.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DoctorDto {
    private int age;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;
    private String position;
    private String medicalUnit;
    private String hospital;
    private String certifications;
}
