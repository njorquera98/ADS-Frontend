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
      this.getUsuarios().subscribe((usuarios: any) => {
        this.usuarios = usuarios;
        this.guardarEnLocalStorage();
      });
    }
  }
  private guardarEnLocalStorage() {
    localStorage.setItem(USUARIOS_KEY, JSON.stringify(this.usuarios));
    console.log(this.usuarios);
  }
  getUsuarios() {
    return this.http.get(this.API_SERVER + '/usuarios');
  }
  obetenrUsuario(id: number): any {
    return this.usuarios.find((usuario: any) => usuario.id_usuario === id);
  }
}
