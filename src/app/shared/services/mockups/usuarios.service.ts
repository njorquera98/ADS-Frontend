import { Injectable } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';

const USUARIOS_KEY = 'usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  usuarios: Usuario[] = [];

  constructor() {
    // const usuariosGuardados = localStorage.getItem(USUARIOS_KEY);
    // if (usuariosGuardados) {
    //   this.usuarios = JSON.parse(usuariosGuardados);
    // } else {
    //   this.usuarios = [
    //     {
    //       id_usuario: 0,
    //       nombre: 'Juan',
    //       run: '1.111.111-1',
    //       apellido_paterno: 'Perez',
    //       apellido_materno: 'Perez',
    //       telefono: '12345675',
    //       rol: 0,
    //     },
    //     {
    //       id_usuario: 1,
    //       nombre: 'Luis',
    //       run: '2.222.222-2',
    //       apellido_paterno: 'Gonzales',
    //       apellido_materno: 'Gonzales',
    //       telefono: '12345676',
    //       rol: 1,
    //     },
    //     {
    //       id_usuario: 2,
    //       nombre: 'Francisco',
    //       run: '3.333.333-3',
    //       apellido_paterno: 'Donoso',
    //       apellido_materno: 'Donoso',
    //       telefono: '12345677',
    //       rol: 2,
    //     },
    //     {
    //       id_usuario: 3,
    //       nombre: 'Miguel',
    //       run: '4.444.444-4',
    //       apellido_paterno: 'Olivares',
    //       apellido_materno: 'Olivares',
    //       telefono: '12345678',
    //       rol: 3,
    //     },
    //   ];
    //   this.guardarEnLocalStorage();
    // }
  }

  private guardarEnLocalStorage() {
    localStorage.setItem(USUARIOS_KEY, JSON.stringify(this.usuarios));
  }

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
    this.guardarEnLocalStorage();
  }

  obtenerUsuarios(): Usuario[] {
    return this.usuarios;
  }

  obetenrUsuario(id: number): Usuario | undefined {
    return this.usuarios.find((usuario) => usuario.id_usuario === id);
  }
}
