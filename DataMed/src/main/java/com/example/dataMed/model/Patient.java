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
public class Patient extends User {
    @OneToMany
    @JoinColumn(name = "id")
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
}
