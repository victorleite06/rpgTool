package com.rpg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rpg.model.Rpg;

@Repository
public interface RpgRepository extends JpaRepository<Rpg, Long> { }