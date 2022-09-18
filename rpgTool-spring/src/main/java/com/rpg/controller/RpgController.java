package com.rpg.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.rpg.model.Rpg;
import com.rpg.repository.RpgRepository;

@RestController
@RequestMapping("api/rpgs")
public class RpgController {

    private final RpgRepository rpgRepository;

    public RpgController(RpgRepository rpgRepository){
        this.rpgRepository = rpgRepository;
    }

    @GetMapping
	public @ResponseBody List<Rpg> list(){ 
		return rpgRepository.findAll();
	}
    
}
