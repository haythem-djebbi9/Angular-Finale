package com.example.ma.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ma.entities.Marque;
import com.example.ma.entities.Pays;
import com.example.ma.repos.ImageRepository;
import com.example.ma.repos.MarqueRepository;


@Service

public class MarqueServiceImp implements MarqueService {

	
	@Autowired
	MarqueRepository marqueRepository;
	@Autowired
    private ImageRepository imageRepository;
	@Override
	public Marque saveMarque(Marque m) {
		return marqueRepository.save(m);
	}

	
	@Override
	public Marque updateMarque(Marque p) {
	
	Marque prodUpdated = marqueRepository.save(p);
	
	return prodUpdated;
	}

	
	@Override
	public void deleteMarque(Marque m) {
		 marqueRepository.delete(m) ;
		
	}

	
	@Override
	public void deleteMarqueById(Long id) {
		marqueRepository.deleteById(id) ;
		
	}

	
	@Override
	public Marque getMarque(Long id) {
		return	marqueRepository.findById(id).get() ;
	}

	
	

	@Override
	public List<Marque> getAllMarques() {
		
				 return	marqueRepository.findAll();
	}

	@Override
	public List<Marque> findByNomMarque(String nom) {
		
		return marqueRepository.findByNomMarque(nom);
	}

	@Override
	public List<Marque> findByNomMarqueContains(String nom) {
	
		return marqueRepository.findByNomMarqueContains(nom);
	}

	@Override
	public List<Marque> findByNomChiffreAffaire(String nom, Double chiffreAffaire) {
		 		return marqueRepository.findByNomChiffreAffaire(nom, chiffreAffaire);

	}

	@Override
	public List<Marque> findByPays(Pays pays) {
		return marqueRepository.findByPays(pays);

	}

	@Override
	public List<Marque> findByPaysIdPays(Long id) {
		return marqueRepository.findByPaysIdPays(id);
	}

	@Override
	public List<Marque> findByOrderByNomMarqueAsc() {
		
		return findByOrderByNomMarqueAsc();
	}

	@Override
	public List<Marque> trierMarquesNomsPrix() {
		return trierMarquesNomsPrix() ;
	}


	
}
