package com.mantenedor.desafio.repositories;

import com.mantenedor.desafio.entities.Task;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository  extends JpaRepository<Task, Long>{
    
}
