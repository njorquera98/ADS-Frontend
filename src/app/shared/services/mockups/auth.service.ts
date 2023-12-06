import { Injectable } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { EstudiantesService } from './estudiantes.service';
import { Estudiante } from '../../../models/estudiante.model';
import { UsuariosService } from './usuarios.service';

const AUTH_KEY = "auth_cuenta"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarios: Usuario[] = [];
  cuenta_actual?: Usuario;

  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.obtenerUsuarios().subscribe((data) => {
      if(data) {
        this.usuarios = data;
        this.cuenta_actual = this.usuarios.find(v => v.rol === 0);
      }
    });
  }

  guardarEnLocalStorage() {
    localStorage.setItem(AUTH_KEY, JSON.stringify(this.cuenta_actual));
  }

  obtenerCuenta(): Usuario | Estudiante | undefined {
    return this.cuenta_actual;
  }
}
