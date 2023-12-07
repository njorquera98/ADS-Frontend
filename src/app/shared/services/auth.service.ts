import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Usuario, UsuarioRol } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  cuentas: Usuario[] = [];
  cuenta_actual?: any;

  constructor(private usuarioService: UsuariosService) {
    usuarioService.getUsuarios().subscribe((res) => {
      this.cuentas = res;
      this.cuenta_actual = this.cuentas.find(c => c.rol === UsuarioRol.Profesor); // profesor default
    });
  }

  getCuenta(): any {
    return this.cuenta_actual;
  }

  cambiarCuenta(rol: UsuarioRol) {
    const cuentaConRol = this.cuentas.find(c => c.rol === rol);
    if(cuentaConRol) this.cuenta_actual = cuentaConRol;
    else console.error("Error al cambiar de cuenta");
  }

  // cambiarCuenta(id:number){
  //   this.cuenta_actual = this.usuarioService.getUsuario(id);
  // }
}
