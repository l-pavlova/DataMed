package com.example.dataMed.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Doctor extends User {
    @Column
    private String position;

    @Column
    private String medicalUnit;

    @Column
    private String hospital;

    @Column
    private String certifications;
}
