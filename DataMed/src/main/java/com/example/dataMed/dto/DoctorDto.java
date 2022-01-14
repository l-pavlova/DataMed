package com.example.dataMed.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DoctorDto {
    private String firstName;
    private String lastName;
    private int age;
    private String phoneNumber;
    private String position;
    private String medicalUnit;
    private String hospital;
    private String certifications;
    private String username;
    private String email;
    private String password;
}
