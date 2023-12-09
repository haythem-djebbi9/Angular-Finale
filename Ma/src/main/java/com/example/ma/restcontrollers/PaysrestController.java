package com.example.ma.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.ma.repos.PaysRepository;
import com.example.ma.entities.Pays;

@RestController
@RequestMapping("/api/pay")
@CrossOrigin("*")

public class PaysrestController {
	
	
	@Autowired
	
	PaysRepository paysRepository;
	
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Pays> getAllPays()
	{
	return paysRepository.findAll();
	}
	@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public Pays getPaysById(@PathVariable("id") Long id) {
	return paysRepository.findById(id).get();
	}

	
	
	
}
