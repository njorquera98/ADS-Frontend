import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '../../models/asignatura.model';

@Injectable({
  providedIn: 'root',
})
export class AsignaturasServices {
  private API_SERVER = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  getAsignaturas() {
    return this.http.get(this.API_SERVER + '/asignaturas');
  }
  getAsignatura(id: number) {
    return this.http.get(this.API_SERVER + '/asignaturas/' + id);
  }
}
