package com.example.dataMed.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
public class PatientRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String createdAt;

    @Column
    private boolean isLocked;

    @Column
    private String fileName;

    @Column
    private String lastModifiedAt;

    @Lob
    private byte[] data;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false, referencedColumnName = "id")
    private Patient patient;

    //check if smth breaks and delete
    public PatientRecord() { }
    public PatientRecord(String fileName, String createdAt, String lastModifiedAt, byte[] data, Patient patient) {
        this.fileName = fileName;
        this.createdAt = createdAt;
        this.lastModifiedAt = lastModifiedAt;
        this.data = data;
        this.patient = patient;
    }
}
