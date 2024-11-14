package com.corhuila.inventores.controllers;

import com.corhuila.inventores.models.entity.Inventor;
import com.corhuila.inventores.models.services.IInventorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:58006"})//el puerto del frontend
@RestController
@RequestMapping("/api")
public class InventorRestController {
    @Autowired
    private IInventorService inventorService;

    @GetMapping("/inventores")
    public List<Inventor> index(){
        return inventorService.findAll();
    }
    @GetMapping("/inventores/{id}")
    public Inventor show(@PathVariable Long id){
        return inventorService.findById(id);
    }

    @PostMapping("/inventores")
    @ResponseStatus(HttpStatus.CREATED)
    public Inventor create(@RequestBody Inventor inventor){
        return inventorService.save(inventor);
    }

    @PutMapping("/inventores/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Inventor update(@RequestBody Inventor inventor, @PathVariable Long id){
        Inventor inventorActual = inventorService.findById(id);

        inventorActual.setNomInventor(inventor.getNomInventor());
        inventorActual.setInvencion(inventor.getInvencion());
        inventorActual.setAnio(inventor.getAnio());
        inventorActual.setNacionalidad(inventor.getNacionalidad());
        inventorActual.setPatentes(inventor.getPatentes());

        return inventorService.save(inventorActual);
    }

    @DeleteMapping("/inventores/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        inventorService.delete(id);
    }
}
