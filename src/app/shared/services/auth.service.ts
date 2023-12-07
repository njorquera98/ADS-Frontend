import { Injectable } from '@angular/core';
import { UsuariosServices } from './usuarios.service';

const AUTH_KEY = 'auth_cuenta';
@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  cuenta_actual?: any;

  constructor(private usuarioService: UsuariosServices) {
    console.log('constructor auth');
    const cuentaGuardada = localStorage.getItem(AUTH_KEY);
    if (cuentaGuardada) {
      this.cuenta_actual = JSON.parse(cuentaGuardada);
    } else {
      this.usuarioService.getUsuarios().subscribe((usuarios: any) => {
        this.cuenta_actual = usuarios[0];
        this.guardarEnLocalStorage();
      });
    }
    console.log('constructor auth');
  }

  guardarEnLocalStorage() {
    localStorage.setItem(AUTH_KEY, JSON.stringify(this.cuenta_actual));
  }

  obtenerCuenta(): any {
    return this.cuenta_actual;
  }

  // cambiarCuenta(id:number){
  //   this.cuenta_actual = this.usuarioService.obtenerUsuario(id);
  // }
}
