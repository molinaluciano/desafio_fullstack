package com.mantenedor.desafio.service.impl;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.mantenedor.desafio.entities.Task;
import com.mantenedor.desafio.exceptions.TaskException;
import com.mantenedor.desafio.models.TaskModel;
import com.mantenedor.desafio.repositories.TaskRepository;
import com.mantenedor.desafio.service.TaskService;
import com.mantenedor.desafio.service.structure.TaskStructureService;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@SpringBootTest
public class TaskServiceImplTest {
  
    @MockBean
    TaskStructureService taskStructureServiceMock;
   
    @MockBean
    TaskRepository taskRepositoryMock;

    @Autowired
    private TaskService taskService;

    Task task;
    TaskModel taskModel;
    List<Task> listTask =  new ArrayList<>();

    @BeforeEach
    void setUp() throws TaskException{
        task = new Task();
        task.setId((long) 343);
        task.setDescription("descripcion de prueba");
        task.setStatus(true);
        task.setCreationDate(LocalDateTime.now());
        listTask.add(task);

        taskModel = new TaskModel();
        taskModel.setId((long) 343);
        taskModel.setDescription("descripcion de prueba");
        taskModel.setStatus(true);
        taskModel.setCreationDate(LocalDateTime.now());
        
        
    }


    @Test
    void testCreateTask() throws TaskException {
        Mockito.when(taskStructureServiceMock.create(task)).thenReturn(task);
    }

    @Test
    void testDeleteTask() throws TaskException {

        Mockito.when(taskStructureServiceMock.delete(task.getId())).thenReturn(true);
        Boolean data = taskService.deleteTask(taskModel.getId());
        Assertions.assertEquals(true, data);
    }

    @Test
    void testGetAllTask() throws TaskException {

        Mockito.when(taskStructureServiceMock.getAll()).thenReturn(listTask);
        List<TaskModel> data = taskService.getAllTask();
        Assertions.assertEquals(1, data.size());
    }

    @Test
    void testUpdateTask() throws TaskException {
        Mockito.when(taskRepositoryMock.getById(task.getId())).thenReturn(null);
        Mockito.when(taskStructureServiceMock.update(task)).thenReturn(false);
        Boolean data = taskService.updateTask(taskModel);
        Assertions.assertEquals(false, data);
    }
}
