import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const USUARIOS_KEY = 'usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuariosServices {
  private API_SERVER = 'http://localhost:3000';
  usuarios: any = [];

  constructor(private http: HttpClient) {
    const usuariosGuardados = localStorage.getItem(USUARIOS_KEY);
    if (usuariosGuardados) {
      this.usuarios = JSON.parse(usuariosGuardados);
    } else {
      this.getUsuarios().then((res) => {
        this.usuarios = res;
        this.guardarEnLocalStorage();
      });
    }
  }
  private guardarEnLocalStorage() {
    localStorage.setItem(USUARIOS_KEY, JSON.stringify(this.usuarios));
    console.log(this.usuarios);
  }
  getUsuarios() {
    return fetch(this.API_SERVER + '/usuarios')
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  }
  obetenrUsuario(id: number): any {
    return this.usuarios.find((usuario: any) => usuario.id_usuario === id);
  }
}
