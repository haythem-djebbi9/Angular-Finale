package com.example.ma.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.ma.entities.Marque;
import com.example.ma.entities.Pays;


@RepositoryRestResource(path = "rest")
public interface MarqueRepository extends JpaRepository <Marque, Long> {
	List<Marque> findByNomMarque(String nom);
	
	List<Marque> findByNomMarqueContains(String nom);
	
	 @Query("select m from Marque m where m.nomMarque like %:nom and m.chiffreaffaire > :chiffre")
	 List<Marque> findByNomChiffreAffaire(@Param("nom") String nom, @Param("chiffre") Double chiffre);
	 
	 @Query("select m from Marque m where m.pays = ?1")
	 List<Marque> findByPays (Pays pays);
	 
	 List<Marque> findByPaysIdPays(Long id);
	 
	 List<Marque> findByOrderByNomMarqueAsc();
	 
	 @Query("select m from Marque m order by m.nomMarque ASC, m.chiffreaffaire DESC")
	 List<Marque> trierMarquesNomsPrix ();
	 
	 
	 
	 
}
