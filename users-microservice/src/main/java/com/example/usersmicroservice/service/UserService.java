package com.example.usersmicroservice.service;

import com.example.usersmicroservice.entities.Role;
import com.example.usersmicroservice.entities.User;

public interface UserService {
User saveUser(User user);
User findUserByUsername (String username);
Role addRole(Role role);
User addRoleToUser(String username, String rolename);
}