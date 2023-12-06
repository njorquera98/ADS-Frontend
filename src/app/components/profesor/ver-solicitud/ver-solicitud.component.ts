import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../../models/solicitud.model';
import { SolicitudesService } from '../../../shared/services/mockups/solicitudes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudiantesService } from '../../../shared/services/mockups/estudiantes.service';
import { AsignaturasService } from '../../../shared/services/mockups/asignaturas.service';
import { AyudantiasService } from '../../../shared/services/mockups/ayudantias.service';
import { Ayudantia } from '../../../models/ayudantia.model';
import { Asignatura } from '../../../models/asignatura.model';
import { Estudiante } from '../../../models/estudiante.model';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-ver-solicitud',
  templateUrl: './ver-solicitud.component.html',
  styleUrl: './ver-solicitud.component.css'
})
export class VerSolicitudComponent implements OnInit{
  solicitud?: Solicitud;
  ayudantia?: Ayudantia;
  asignatura?: Asignatura;
  estudiante?: Estudiante;

  constructor(private solicitudesService: SolicitudesService, private activatedRoute: ActivatedRoute,
    public estudiantesService: EstudiantesService, public asignaturasService: AsignaturasService,
    public ayudantiasService: AyudantiasService, private router: Router){}

  ngOnInit(): void {
    this.solicitudesService.obtenerSolicitudPorId(+this.activatedRoute.snapshot.params['id_solicitud']).subscribe((data) => {
      if(data){
        this.solicitud = data;
        this.ayudantiasService.obtenerAyudantiaPorId(this.solicitud.id_ayudantia).subscribe((data) => {
          if(data){
            this.ayudantia = data;
            this.asignaturasService.obtenerAsignaturaPorId(this.ayudantia.id_asignatura).subscribe((data) => {
              if(data){
                this.asignatura = data;
              }
            });
            this.estudiantesService.obtenerEstudiantePorId(this.solicitud?.id_usuario!).subscribe((data) => {
              if(data){
                this.estudiante = data;
              }
            });
          }
        });
      }
    });
  }

  getAyudantiaString(solicitud: Solicitud) {
    return `${this.asignatura?.nombre} ${this.asignatura?.letra}`;
  }

  getNombreEstudiante(solicitud: Solicitud) {
    return `${this.estudiante?.nombre} ${this.estudiante?.apellido_paterno} ${this.estudiante?.apellido_materno}`;
  }

  getPromedioNotas(solicitud: Solicitud) {
    return this.estudiante?.promedio_notas;
  }

  cancelar() {
    this.router.navigate(['profesor/solicitudes']);
  }
}
