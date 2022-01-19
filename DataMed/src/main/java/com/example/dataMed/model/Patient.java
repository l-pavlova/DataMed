package com.example.dataMed.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="patient")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column
    String firstName;

    @Column
    String lastName;

    @Column
    private int age;

    @Column
    private String phoneNumber;

    @Column(nullable = false, unique = true)
    private String email;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    private List<PatientRecord> records;

    @Column(nullable = false, unique = true)
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

    @Lob
    @Column
    Byte[] image;
}
