package com.example.dataMed.dto;

import com.example.dataMed.model.PatientRecord;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
@NoArgsConstructor
public class PatientDto {
    private Integer id;
    private String username;

    @Setter(AccessLevel.NONE)
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
    private Byte[] image;

}
