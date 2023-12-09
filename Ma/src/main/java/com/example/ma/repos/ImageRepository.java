package com.example.ma.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ma.entities.Image;

public interface ImageRepository extends JpaRepository<Image , Long> {
}