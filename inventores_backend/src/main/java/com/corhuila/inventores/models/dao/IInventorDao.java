package com.corhuila.inventores.models.dao;

import com.corhuila.inventores.models.entity.Inventor;
import org.springframework.data.repository.CrudRepository;

public interface IInventorDao extends CrudRepository<Inventor, Long> {
}
