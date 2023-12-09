package com.example.usersmicroservice.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.usersmicroservice.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
Role findByRole(String role);
}