package com.example.dataMed.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

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
