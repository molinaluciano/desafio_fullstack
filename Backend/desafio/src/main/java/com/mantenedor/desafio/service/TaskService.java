package com.mantenedor.desafio.service;

import java.util.List;

import com.mantenedor.desafio.exceptions.TaskException;
import com.mantenedor.desafio.models.TaskModel;

public interface TaskService {
    public TaskModel createTask(TaskModel task) throws TaskException;
    public Boolean deleteTask(Long id) throws TaskException;
    public Boolean updateTask(TaskModel task) throws TaskException;
    public List<TaskModel> getAllTask() throws TaskException;
}
