import { Injectable } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { EstudiantesService } from './estudiantes.service';
import { Estudiante } from '../../../models/estudiante.model';
import { UsuariosService } from './usuarios.service';

const AUTH_KEY = 'auth_cuenta';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  cuenta_actual?: Usuario | Estudiante;

  constructor(private usuariosService: UsuariosService) {
    const cuentaGuardada = localStorage.getItem(AUTH_KEY);
    if (cuentaGuardada) {
      this.cuenta_actual = JSON.parse(cuentaGuardada);
    } else {
      this.cuenta_actual = usuariosService.usuarios[0];
      this.guardarEnLocalStorage();
    }
  }

  guardarEnLocalStorage() {
    localStorage.setItem(AUTH_KEY, JSON.stringify(this.cuenta_actual));
  }

  cambiarCuenta(id: number) {
    this.cuenta_actual = this.usuariosService.usuarios.find(
      (val) => val.id_usuario === id
    );
    this.guardarEnLocalStorage();
  }

  obtenerCuenta(): Usuario | Estudiante | undefined {
    return this.cuenta_actual;
  }
}
