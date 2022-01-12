package com.example.dataMed.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
public class PatientRecordDto {
//    private Date created;
//    private boolean isLocked;
//    private Date lastModified;
    private Byte[] data;
}
