package com.example.dataMed.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(uniqueConstraints= @UniqueConstraint(columnNames={"file_name"}))
public class MedicalTemplate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String createdAt;

    @Column(name = "file_name")
    private String fileName;

    @Lob
    private byte[] data;

    public MedicalTemplate(String fileName, String createdAt, byte[] data) {
        this.fileName = fileName;
        this.createdAt = createdAt;
        this.data = data;
    }
}
