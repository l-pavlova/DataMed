package com.example.dataMed.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class PatientRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private Date created;

    @Column
    private boolean isLocked;

    @Column
    private String fileName;

    @Column
    private Date lastModified;

    @Lob
    private Byte[] data;
}
