package com.corhuila.inventores.models.services;

import com.corhuila.inventores.models.entity.Inventor;

import java.util.List;

public interface IInventorService {
    public List<Inventor> findAll();

    public Inventor findById(Long id);

    public Inventor save(Inventor inventor);

    public void delete(Long id);
}
