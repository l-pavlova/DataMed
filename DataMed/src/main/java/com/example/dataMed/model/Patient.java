package com.example.dataMed.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="patient")
public class Patient extends User {
    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    @JsonIgnore
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
