package com.example.WorldBankData;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@EnableWebMvc
@EnableJpaRepositories
@SpringBootApplication
@CrossOrigin(origins = "http://localhost:3000")
public class WorldBankViewApplication {

	public static void main(String[] args) {
		SpringApplication.run(WorldBankViewApplication.class, args);
	}

}
