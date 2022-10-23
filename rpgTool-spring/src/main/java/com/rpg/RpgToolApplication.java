package com.rpg;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import com.rpg.model.Rpg;
import com.rpg.repository.RpgRepository;

@SpringBootApplication
@ComponentScan
public class RpgToolApplication {

	public static void main(String[] args) {
		SpringApplication.run(RpgToolApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(RpgRepository rpgRepository){
		return args -> {
			rpgRepository.deleteAll();

			Rpg r = new Rpg();
			r.setName("Dangeon & Dragons");

			rpgRepository.saveAndFlush(r);
		};
	}

}
