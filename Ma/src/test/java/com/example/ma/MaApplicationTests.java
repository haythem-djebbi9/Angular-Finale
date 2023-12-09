package com.example.ma;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import com.example.ma.entities.Marque;
import com.example.ma.repos.MarqueRepository;
import com.example.ma.entities.Pays;


@SpringBootTest
class MaApplicationTests {
	@Autowired
	private MarqueRepository marqueRepository;
	@Test
	public void testCreateMarque() {
		Marque mar = new Marque("nom", 123.45, new Date(), "slogan", "secteur");
	marqueRepository.save(mar);
	}
	public void testFindMarque()
	{
		Marque mar = marqueRepository.findById(1L).get(); 
	System.out.println(mar);
	}
	@Test
	public void testUpdateMarque()
	{
		Marque mar = marqueRepository.findById(1L).get();
		mar.setChiffreaffaire(1000.0);
		marqueRepository.save(mar);
	}
	@Test
	public void testDeleteMarque()
	{
		marqueRepository.deleteById(1L);;
	}

	@Test
	public void testListerTousMarque()
	{
	List<Marque> mar =  marqueRepository.findAll();
	for (Marque m : mar)
	{
	System.out.println(m);
	}
	}
	@Test
	public void testFindMarqueByNom()
	{
	List<Marque> mar = marqueRepository.findByNomMarque("nike"); 
	for (Marque m : mar)
	{
	System.out.println(m);
	}
	}

	@Test
	public void testFindMarqueByNomContains()
	{
	List<Marque> mar = marqueRepository.findByNomMarqueContains("n"); 
	for (Marque m : mar)
	{
	System.out.println(m);
	}
	}
	@Test
	public void testFindByNomMarquePrix() {
	    List<Marque> marques = marqueRepository.findByNomChiffreAffaire("nom", 2200.5);
	    for (Marque m : marques) {
	        System.out.println(m);
	    }
	}
	
	@Test
	public void testFindByPays() {
	    Pays pays = new Pays();
	    pays.setIdPays(2L);

	    List<Marque> marques = marqueRepository.findByPays(pays);
	    for (Marque m : marques) {
	        System.out.println(m);
	    }
	}
	
	
	@Test
	public void findByPaysIdPays()
	{
	List<Marque> mar = marqueRepository.findByPaysIdPays(2L);
	for (Marque m : mar)
	{
	System.out.println(m);
	}
	 }
	
	
	@Test
	public void testfindByOrderByNomMarqueAsc()
	{
	List<Marque> mar = marqueRepository.findByOrderByNomMarqueAsc();
	for (Marque m : mar)
	{
	System.out.println(m);
	}
	}
	@Test
	public void testTrierMarquesNomsPrix()
	{
	List<Marque> mar =marqueRepository.trierMarquesNomsPrix();
	for (Marque m : mar)
	{
	System.out.println(m);
	}
	}
	


}
