package com.example.dataMed.dto;

import com.example.dataMed.model.PatientRecord;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
@NoArgsConstructor
public class PatientDto {
    private String username;
    private String password;
    String firstName;
    String lastName;
    private int age;
    private String phoneNumber;
    private String email;
    private List<PatientRecord> records;
    private String egn;
    private double height;
    private double weight;
    private String bloodType;
    private String shortMedicalHistory;
    private String constantDiagnoses;
    private String pillsTakenRegularly;
}
