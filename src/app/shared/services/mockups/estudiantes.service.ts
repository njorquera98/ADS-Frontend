import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../../../models/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  apiUrl = 'http://localhost:3000';
  apiVersion = 'v1';

  constructor(private http: HttpClient) {}

  obtenerEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.apiUrl}/${this.apiVersion}/estudiantes`);
  }

  obtenerEstudiantePorId(id: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.apiUrl}/${this.apiVersion}/estudiantes/${id}`);
  }

  agregarEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(`${this.apiUrl}/${this.apiVersion}/estudiantes`, estudiante);
  }

  actualizarEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.patch<Estudiante>(`${this.apiUrl}/${this.apiVersion}/estudiantes/${estudiante.id_estudiante}`, estudiante);
  }

  eliminarEstudiante(id: number): Observable<Estudiante> {
    return this.http.delete<Estudiante>(`${this.apiUrl}/${this.apiVersion}/estudiantes/${id}`);
  }
}
