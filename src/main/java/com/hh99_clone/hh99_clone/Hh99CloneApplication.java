package com.hh99_clone.hh99_clone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class Hh99CloneApplication {
    public static void main(String[] args) {
        SpringApplication.run(Hh99CloneApplication.class, args);
    }
}