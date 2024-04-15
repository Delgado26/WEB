/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package base.fachada;

import base.entidades.Usuario;
import base.negocio.UsuarioNegocio;
import java.util.List;

/**
 *
 * @author Usuario
 */
public class UsuarioFachada {

    private UsuarioNegocio usuarioNegocio;

    public UsuarioFachada() {
        usuarioNegocio = new UsuarioNegocio();
    }

    public String insertarUsuario(Usuario p, String nuevo) {
        return usuarioNegocio.insertarUsuario(p, nuevo);
    }

    public Usuario buscarUsuario(String usuario) {
        return usuarioNegocio.buscarUsuario(usuario);
    }

    public List<Usuario> buscarUsuarios() {
        return usuarioNegocio.buscarUsuarios();
    }

    public String eliminarUsuario(String nick) {
        return usuarioNegocio.eliminarUsuario(nick);
    }

    //OPCIONAL SOLO PARA LOGIN
    public String validarUsuario(String usuario, String password) {
        return usuarioNegocio.validarUsuario(usuario, password);
    }
    
}