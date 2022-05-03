package com.mantenedor.desafio.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.mantenedor.desafio.entities.Task;
import com.mantenedor.desafio.exceptions.TaskException;
import com.mantenedor.desafio.models.TaskModel;
import com.mantenedor.desafio.service.TaskService;
import com.mantenedor.desafio.service.structure.TaskStructureService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {


    @Autowired
    private TaskStructureService taskStructureService;

    @Override
    public TaskModel createTask(TaskModel task) throws TaskException {
        try {
            
            if(task.getStatus() == null || task.getDescription() == null){
                throw new TaskException("Invalid Model");
            }
    
            Task data = new Task();
            data.setDescription(task.getDescription());
            data.setStatus(task.getStatus());
            Task newTask = taskStructureService.create(data);
    
            TaskModel taskModel = new TaskModel();
            taskModel.setId(newTask.getId());
            taskModel.setDescription(newTask.getDescription());
            taskModel.setCreationDate(newTask.getCreationDate());
            taskModel.setStatus(newTask.getStatus());
    
            return taskModel;
        } catch (TaskException error) {
            throw error;
        }

    }

    @Override
    public Boolean deleteTask(Long id) throws TaskException {
        Boolean data = taskStructureService.delete(id);
        return data;
    }

    @Override
    public Boolean updateTask(TaskModel task) throws TaskException {
        try {
            
            if(task.getStatus() == null || task.getDescription() == null || task.getId() == null){
                throw new TaskException("Invalid Model");
            }
            Task data = new Task();
            data.setDescription(task.getDescription());
            data.setStatus(task.getStatus());
            data.setId(task.getId());
            Boolean response = taskStructureService.update(data);
            return response;
        } catch (TaskException error) {
            throw error;
        }
    }

    @Override
    public List<TaskModel> getAllTask() throws TaskException {
        List<Task> listTask = new ArrayList<>();
        listTask = taskStructureService.getAll();

        List<TaskModel> listTaskModels = new ArrayList<TaskModel>();
        for (Task task : listTask) {
            TaskModel taskModel = new TaskModel();
            taskModel.setId(task.getId());
            taskModel.setDescription(task.getDescription());
            taskModel.setCreationDate(task.getCreationDate());
            taskModel.setStatus(task.getStatus());
            listTaskModels.add(taskModel);
        }
        return listTaskModels;
    }
    
}
