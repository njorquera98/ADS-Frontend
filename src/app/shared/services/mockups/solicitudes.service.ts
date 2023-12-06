import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitud } from '../../../models/solicitud.model';

@Injectable({
  providedIn: 'root',
})
export class SolicitudesService {
  apiUrl = 'http://localhost:3000';
  apiVersion = 'v1';

  constructor(private http: HttpClient) {}

  obtenerSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${this.apiUrl}/${this.apiVersion}/solicitudes`);
  }

  obtenerSolicitudPorId(id: number): Observable<Solicitud> {
    return this.http.get<Solicitud>(`${this.apiUrl}/${this.apiVersion}/solicitudes/${id}`);
  }

  agregarSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.post<Solicitud>(`${this.apiUrl}/${this.apiVersion}/solicitudes`, solicitud);
  }

  actualizarSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.patch<Solicitud>(`${this.apiUrl}/${this.apiVersion}/solicitudes/${solicitud.id_solicitud}`, solicitud);
  }

  eliminarSolicitud(id: number): Observable<Solicitud> {
    return this.http.delete<Solicitud>(`${this.apiUrl}/${this.apiVersion}/solicitudes/${id}`);
  }
}
