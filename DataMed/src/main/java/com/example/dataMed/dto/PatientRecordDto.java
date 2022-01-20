package com.example.dataMed.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class PatientRecordDto {
    private String created;
    private boolean isLocked;
    private String lastModified;
    private String fileName;
    private Byte[] data;
}
