package com.corhuila.inventores.models.services;

import com.corhuila.inventores.models.dao.IInventorDao;
import com.corhuila.inventores.models.entity.Inventor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class InventorServiceImpl implements IInventorService {
    @Autowired
    private IInventorDao inventorDao;
    @Override
    @Transactional(readOnly = true)
    public List<Inventor> findAll() {
        return (List<Inventor>) inventorDao.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Inventor findById(Long id) {
        return inventorDao.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Inventor save(Inventor inventor) {
        return inventorDao.save(inventor);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        inventorDao.deleteById(id);
    }
}
