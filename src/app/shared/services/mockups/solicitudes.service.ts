import { Injectable } from '@angular/core';
import { Solicitud } from '../../../models/solicitud.model';

const SOLICITUDES_KEY = 'solicitudes';

@Injectable({
  providedIn: 'root',
})
export class SolicitudesService {
  solicitudes: Solicitud[] = [];

  constructor() {
    const solicitudesGuardadas = localStorage.getItem(SOLICITUDES_KEY);
    if (solicitudesGuardadas) {
      this.solicitudes = JSON.parse(solicitudesGuardadas);
    } else {
      this.solicitudes = [
        {
          id_solicitud: 0,
          id_ayudantia: 0,
          id_usuario: 1,
          fecha: new Date(Date.now()),
          estado: 'Creado',
          id_periodo: 1,
          prioridad: 1,
          promedio_asignatura: 6.1,
          anteriormente_ayudante: false,
        },
        {
          id_solicitud: 1,
          id_ayudantia: 1,
          id_usuario: 2,
          fecha: new Date('2022-11-15T08:30:00Z'),
          estado: 'Creado',
          id_periodo: 1,
          prioridad: 1,
          promedio_asignatura: 6.1,
          anteriormente_ayudante: true,
        },
      ];
      this.guardarEnLocalStorage();
    }
  }

  guardarEnLocalStorage() {
    localStorage.setItem(SOLICITUDES_KEY, JSON.stringify(this.solicitudes));
  }

  agregarSolicitud(solicitud: Solicitud) {
    this.solicitudes.push(solicitud);
    this.guardarEnLocalStorage();
  }

  obtenerSolicitudes(): Solicitud[] {
    return this.solicitudes;
  }

  obtenerSolicitud(id: number): Solicitud | undefined {
    return this.solicitudes.find((solicitud) => solicitud.id_solicitud === id);
  }
}
