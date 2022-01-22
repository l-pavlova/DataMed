package com.example.dataMed.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MedicalTemplateDto {
    private String createdAt;
    private String fileName;
    private Byte[] data;
}
