package com.mantenedor.desafio.service.structure;

import java.util.List;

import com.mantenedor.desafio.exceptions.TaskException;

public interface DataStructureService<T> {

    public abstract List<T> getAll() throws TaskException;

    public abstract T create(T t) throws TaskException;

    public abstract boolean update(T t) throws TaskException;

    public abstract boolean delete(Long id) throws TaskException;
}
