package com.example.ma.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "nomMar", types = {Marque.class })

public interface MarqueProjection {
	public String getNomMarque();
}