package com.example.ma.service;

import java.util.List;

import com.example.ma.entities.Marque;
import com.example.ma.entities.Pays;

public interface MarqueService {
	Marque saveMarque(Marque m);
	Marque updateMarque(Marque m);
	void deleteMarque(Marque m);
	void deleteMarqueById(Long id);
	Marque getMarque(Long id);
	List<Marque> getAllMarques();
	
	List<Marque> findByNomMarque(String nom);
	List<Marque> findByNomMarqueContains(String nom);
	List<Marque> findByNomChiffreAffaire(String nom, Double chiffreAffaire);
	List<Marque> findByPays(Pays pays);
	List<Marque> findByPaysIdPays(Long id);
	List<Marque> findByOrderByNomMarqueAsc();
	List<Marque> trierMarquesNomsPrix();
	
	
}
