package com.corhuila.inventores.models.entity;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name="inventor")
public class Inventor implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100)
    private String nomInventor;
    private String invencion;
    @Column(name = "año")
    private Integer anio;
    private String nacionalidad;
    private Integer patentes;

    private static final long serialVersionUID=1L;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomInventor() {
        return nomInventor;
    }

    public void setNomInventor(String nomInventor) {
        this.nomInventor = nomInventor;
    }

    public String getInvencion() {
        return invencion;
    }

    public void setInvencion(String invencion) {
        this.invencion = invencion;
    }

    public Integer getAnio() {
        return anio;
    }

    public void setAnio(Integer anio) {
        this.anio = anio;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public Integer getPatentes() {
        return patentes;
    }

    public void setPatentes(Integer patentes) {
        this.patentes = patentes;
    }
}
