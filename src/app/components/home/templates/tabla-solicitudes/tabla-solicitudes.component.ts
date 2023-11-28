import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesService } from '../../../../shared/services/mockups/solicitudes.service';
import { AsignaturasService } from '../../../../shared/services/mockups/asignaturas.service';
import { Asignatura } from '../../../../models/asignatura.model';
import { Ayudantia } from '../../../../models/ayudantia.model';
import { AuthService } from '../../../../shared/services/mockups/auth.service';
import { AyudantiasService } from '../../../../shared/services/mockups/ayudantias.service';
import { Solicitud } from '../../../../models/solicitud.model';
import { UsuariosService } from '../../../../shared/services/mockups/usuarios.service';
import { Estudiante } from '../../../../models/estudiante.model';
import { EstudiantesService } from '../../../../shared/services/mockups/estudiantes.service';

@Component({
  selector: 'app-tabla-solicitudes',
  templateUrl: './tabla-solicitudes.component.html',
  styleUrl: './tabla-solicitudes.component.css'
})
export class TablaSolicitudesComponent {
  
  constructor(public solicitudesService: SolicitudesService, private asignaturasService: AsignaturasService, 
    public ayudantiasService: AyudantiasService, public authService: AuthService, private estudiantesService: EstudiantesService){};

  ngOnInit(): void {
  }

  getAsignatura(solicitud: Solicitud): Asignatura | undefined {
    const ayudantia = this.ayudantiasService.ayudantias.find(val => val.id_ayudantia === solicitud.id_ayudantia);
    return this.asignaturasService.asignaturas.find(a => a.id_asignatura === ayudantia?.id_asignatura)
  }

  getUser(solicitud: Solicitud): Estudiante | undefined{
    return this.estudiantesService.estudiantes.find(val => val.id_usuario === solicitud.id_usuario);
  }

  createAyudantia() {
    
  }
}
