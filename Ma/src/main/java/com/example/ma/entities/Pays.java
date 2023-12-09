package com.example.ma.entities;



	
import java.util.List;



import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
	
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
	public class Pays {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long idPays;
		
		private String nomPays;
		private String continent;
		 @JsonIgnore
		@OneToMany(mappedBy = "pays")
		private List<Marque> marques;
		
		

		
		
	}
	
	
	
	

