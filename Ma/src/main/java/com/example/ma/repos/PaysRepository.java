package com.example.ma.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.ma.entities.Pays;

@RepositoryRestResource(path = "pay")
@CrossOrigin("http://localhost:4200/") //pour autoriser angular
public interface PaysRepository extends JpaRepository<Pays, Long> {

}
