package com.mantenedor.desafio.controllers;

import java.util.List;

import com.mantenedor.desafio.exceptions.NotFoundException;
import com.mantenedor.desafio.models.ErrorDetail;
import com.mantenedor.desafio.models.TaskModel;
import com.mantenedor.desafio.service.TaskService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TaskController {
    private static final Logger LOGGER = LoggerFactory.getLogger(TaskController.class);

    @Autowired
    TaskService taskService;
    
    @PostMapping(value = "/")
    public ResponseEntity<?> postTask(@RequestBody TaskModel taskModel){
        LOGGER.debug("taskModel: " + taskModel);
        try {
            TaskModel task = taskService.createTask(taskModel);
            return new ResponseEntity<TaskModel>(task, HttpStatus.CREATED);
        } catch (Exception exception) {
            LOGGER.debug("Error" + exception);
            return new ResponseEntity<ErrorDetail>(new ErrorDetail(exception.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping(value = "/")
    public ResponseEntity<?> getTasks(){
        try {
            List<TaskModel> tasks = taskService.getAllTask();
            return new ResponseEntity<List<TaskModel>>(tasks, HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity<ErrorDetail>(new ErrorDetail(exception.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @DeleteMapping(value = "/{idTask}")
    public ResponseEntity<?> deleteTask(@PathVariable Long idTask){
        try {
            taskService.deleteTask(idTask);
            return new ResponseEntity<Void>( HttpStatus.OK);
        } catch (NotFoundException exception) {
            LOGGER.debug("Error" + exception);
            return new ResponseEntity<ErrorDetail>(new ErrorDetail(exception.getMessage()), HttpStatus.NOT_FOUND);
        }
         catch (Exception exception) {
            return new ResponseEntity<ErrorDetail>(new ErrorDetail(exception.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping(value = "/")
    public ResponseEntity<?> putRule(@RequestBody TaskModel taskModel) {
        try {
            Boolean response = taskService.updateTask(taskModel);
            return new ResponseEntity<Boolean>(response, HttpStatus.OK);
        }catch (NotFoundException exception) {
            LOGGER.debug("Error" + exception);
            return new ResponseEntity<ErrorDetail>(new ErrorDetail(exception.getMessage()), HttpStatus.NOT_FOUND);
        }
        catch (Exception exception){
            return new ResponseEntity<ErrorDetail>(new ErrorDetail(exception.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
