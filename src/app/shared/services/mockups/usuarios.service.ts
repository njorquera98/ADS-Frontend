import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  apiUrl = 'http://localhost:3000';
  apiVersion = 'v1';

  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/${this.apiVersion}/usuarios`);
  }

  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${this.apiVersion}/usuarios/${id}`);
  }

  agregarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/${this.apiVersion}/usuarios`, usuario);
  }

  actualizarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.apiUrl}/${this.apiVersion}/usuarios/${usuario.id_usuario}`, usuario);
  }

  eliminarUsuario(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.apiUrl}/${this.apiVersion}/usuarios/${id}`);
  }
}
