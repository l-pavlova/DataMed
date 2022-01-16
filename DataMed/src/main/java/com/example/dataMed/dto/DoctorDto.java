package com.example.dataMed.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.ReadOnlyProperty;

@Getter
@Setter
@NoArgsConstructor
public class DoctorDto {
    private Integer id;
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

    @Setter(AccessLevel.NONE)
    private String password;
}
