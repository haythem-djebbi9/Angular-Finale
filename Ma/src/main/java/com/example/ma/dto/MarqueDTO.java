package com.example.ma.dto;

import java.util.Date;
import com.example.ma.entities.Pays;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MarqueDTO {
    private Long idMarque;
    private String nomMarque;
    private Double chiffreaffaire;
    private Date dateValidation;
    private String secteurActivite;
    private String slogan;
    private Pays pays;

   
}
