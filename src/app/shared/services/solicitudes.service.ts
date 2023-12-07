import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitud } from '../../models/solicitud.model';

@Injectable({
  providedIn: 'root',
})
export class SolicitudesService {
  apiUrl = 'http://localhost:3000';
  apiVersion = 'v1';

  constructor(private http: HttpClient) {}

  getSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${this.apiUrl}/${this.apiVersion}/solicitudes`);
  }

  getSolicitudById(id: number): Observable<Solicitud> {
    return this.http.get<Solicitud>(`${this.apiUrl}/${this.apiVersion}/solicitudes/${id}`);
  }

  createSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.post<Solicitud>(`${this.apiUrl}/${this.apiVersion}/solicitudes`, solicitud);
  }

  updateSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.patch<Solicitud>(`${this.apiUrl}/${this.apiVersion}/solicitudes/${solicitud.id_solicitud}`, solicitud);
  }

  deleteSolicitud(id: number): Observable<Solicitud> {
    return this.http.delete<Solicitud>(`${this.apiUrl}/${this.apiVersion}/solicitudes/${id}`);
  }
}
