package com.example.ma;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.example.ma.entities.Marque;
import com.example.ma.entities.Pays;
import com.example.ma.service.MarqueService;

@SpringBootApplication
public class MaApplication implements CommandLineRunner {

    @Autowired
    MarqueService marqueService;

    @Autowired
    private RepositoryRestConfiguration repositoryRestConfiguration;

    public static void main(String[] args) {
        SpringApplication.run(MaApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        repositoryRestConfiguration.exposeIdsFor(Marque.class, Pays.class);
    }
}
