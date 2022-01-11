package com.example.dataMed.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String username;

    @Column
    private String password;

    @Column
    String firstName;

    @Column
    String lastName;

    @Column
    private int age;

    @Column
    private String phoneNumber;

    @Column
    private String email;

    @OneToMany
    @JoinColumn(name = "id")
    private List<PatientRecord> records;

    @Column
    private String egn;

    @Column
    private double height;

    @Column
    private double weight;

    @Column
    private String bloodType;

    @Column
    private String shortMedicalHistory;

    @Column
    private String constantDiagnoses;

    @Column
    private String pillsTakenRegularly;
}
