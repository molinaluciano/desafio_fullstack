package com.mantenedor.desafio.service.impl.structure;

import java.util.List;

import com.mantenedor.desafio.entities.Task;
import com.mantenedor.desafio.exceptions.NotFoundException;
import com.mantenedor.desafio.exceptions.TaskException;
import com.mantenedor.desafio.repositories.TaskRepository;
import com.mantenedor.desafio.service.structure.TaskStructureService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskStructureServiceImpl implements TaskStructureService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Task create(Task t) throws TaskException {
        Task data = taskRepository.save(t);
        return data;
    }

    @Override
    public boolean update(Task t) throws TaskException {
    
        try {
            
            Task data = taskRepository.getById(t.getId());  
            data.setDescription(t.getDescription());
            data.setStatus(t.getStatus());
            taskRepository.save(data);
    
            return true;
        } catch (Exception error) {
            throw new NotFoundException("Not Found Task");
        }
    }

    @Override
    public boolean delete(Long id) throws TaskException {
        try {
            
            taskRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            throw new NotFoundException("Not Found Task");
        }
    }

    @Override
    public List<Task> getAll() throws TaskException {
        List<Task>  data = taskRepository.findAll();
        return data;
    }

    
}
