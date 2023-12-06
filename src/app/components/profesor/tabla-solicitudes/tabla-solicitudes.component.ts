import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../../shared/services/mockups/solicitudes.service';
import { Asignatura } from '../../../models/asignatura.model';
import { Estudiante } from '../../../models/estudiante.model';
import { Solicitud } from '../../../models/solicitud.model';
import { AsignaturasService } from '../../../shared/services/mockups/asignaturas.service';
import { AuthService } from '../../../shared/services/mockups/auth.service';
import { AyudantiasService } from '../../../shared/services/mockups/ayudantias.service';
import { EstudiantesService } from '../../../shared/services/mockups/estudiantes.service';
import { Ayudantia } from '../../../models/ayudantia.model';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-tabla-solicitudes',
  templateUrl: './tabla-solicitudes.component.html',
  styleUrl: './tabla-solicitudes.component.css'
})
export class TablaSolicitudesComponent implements OnInit{
  asignaturas: Asignatura[] = []
  ayudantias: Ayudantia[] = [];
  solicitudes: Solicitud[] = [];
  estudiantes: Estudiante[] = [];

  constructor(public solicitudesService: SolicitudesService, private asignaturasService: AsignaturasService, 
    public ayudantiasService: AyudantiasService, public authService: AuthService, private estudiantesService: EstudiantesService){}
    
  ngOnInit(): void {
    this.asignaturasService.obtenerAsignaturas().subscribe((data) => {
      if(data) {
        this.asignaturas = data;
      }
    });
    this.ayudantiasService.obtenerAyudantias().subscribe((data) => {
      if(data) {
        this.ayudantias = data;
      }
    });
    this.solicitudesService.obtenerSolicitudes().subscribe((data) => {
      if(data) {
        this.solicitudes = data;
      }
    });
    this.estudiantesService.obtenerEstudiantes().subscribe((data) => {
      if(data) {
        this.estudiantes = data;
      }
    });
  }
;

  getAsignatura(solicitud: Solicitud): Asignatura | undefined {
    const ayudantia = this.ayudantias.find(val => val.id_ayudantia === solicitud.id_ayudantia);
    return this.asignaturas.find(a => a.id_asignatura === ayudantia?.id_asignatura)
  }

  getUser(solicitud: Solicitud): Estudiante | undefined{
    return this.estudiantes.find(val => val.id_usuario === solicitud.id_usuario);
  }

  eliminarSolicitud(solicitud: Solicitud) {
    const index = this.solicitudes.findIndex(val => val.id_solicitud === solicitud.id_solicitud)!;
    this.solicitudes.splice(index, 1);
    this.solicitudesService.eliminarSolicitud(solicitud.id_solicitud!).subscribe((data) => {
      if(data) {
        console.log("Solicitud eliminada");
      }
    });
  }

  aprobarSolicitud(solicitud: Solicitud) {
    solicitud.estado = "Aprobado";

    this.solicitudesService.actualizarSolicitud(solicitud).subscribe((data) => {
      if(data) {
        console.log("Solicitud actualizada");
      }
    });
  }

  rechazarSolicitud(solicitud: Solicitud) {
    solicitud.estado = "Rechazado";

    this.solicitudesService.actualizarSolicitud(solicitud).subscribe((data) => {
      if(data) {
        console.log("Solicitud actualizada");
      }
    });
  }

  reset(solicitud: Solicitud) {
    solicitud.estado = "Creado";

    this.solicitudesService.actualizarSolicitud(solicitud).subscribe((data) => {
      if(data) {
        console.log("Solicitud actualizada");
      }
    });
  }

}
