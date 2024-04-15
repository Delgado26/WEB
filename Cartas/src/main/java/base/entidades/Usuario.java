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
public class Usuario implements Serializable {

    private String nick;
    private String nombre;
    private String password;
    private int tipo;

    public Usuario() {
        super();
    }

    public Usuario(String nick, String nombre, String password, int tipo) {
        this.nick = nick;
        this.nombre = nombre;
        this.password = password;
        this.tipo = tipo;
    }

    public String getNick() {
        return nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    @Override
    public String toString() {
        return "Usuario{" + "nick=" + nick + ", nombre=" + nombre + ", password=" + password + ", tipo=" + tipo + '}';
    }

}
