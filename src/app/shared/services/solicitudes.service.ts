import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SolicitudesServices {
  private API_SERVER = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  getSolicitudes() {
    return this.http.get(this.API_SERVER + '/solicitudes');
  }

  createSolicitud(solicitud: any) {
    return this.http.post(`${this.API_SERVER}/solicitudes`, solicitud);
  }

  deleteSolicitud(id: number) {
    return this.http.delete(`${this.API_SERVER}/solicitudes/${id}`, {
      observe: 'response',
    });
  }
}
