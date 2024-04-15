/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package base.entidades;

import java.io.Serializable;

/**
 *
 * @author Usuario
 */
public class Profesor implements Serializable {

    private String codigo;
    private String nombre;
    private String apellido;
    private int telefono;

    public Profesor() {
        super();
    }

    public Profesor(String codigo, String nombre, String apellido, int telefono) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    @Override
    public String toString() {
        return "Profesor{" + "codigo=" + codigo + ", nombre=" + nombre + ", apellido=" + apellido + ", telefono=" + telefono + '}';
    }



   

}
