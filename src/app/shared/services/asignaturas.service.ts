import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignatura } from '../../models/asignatura.model';

@Injectable({
  providedIn: 'root',
})
export class AsignaturasService {
  apiUrl = 'http://localhost:3000';
  apiVersion = 'v1';

  constructor(private http: HttpClient) {}

  getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(`${this.apiUrl}/${this.apiVersion}/asignaturas`);
  }

  getAsignaturaById(id: number): Observable<Asignatura> {
    return this.http.get<Asignatura>(`${this.apiUrl}/${this.apiVersion}/asignaturas/${id}`);
  }

  createAsignatura(asignatura: Asignatura): Observable<Asignatura> {
    return this.http.post<Asignatura>(`${this.apiUrl}/${this.apiVersion}/asignaturas`, asignatura);
  }

  updateAsignatura(asignatura: Asignatura): Observable<Asignatura> {
    return this.http.patch<Asignatura>(`${this.apiUrl}/${this.apiVersion}/asignaturas/${asignatura.id_asignatura}`, asignatura);
  }

  deleteAsignatura(id: number): Observable<Asignatura> {
    return this.http.delete<Asignatura>(`${this.apiUrl}/${this.apiVersion}/asignaturas/${id}`);
  }
}
