import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../../../models/solicitud.model';
import { SolicitudesService } from '../../../../shared/services/mockups/solicitudes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudiantesService } from '../../../../shared/services/mockups/estudiantes.service';
import { AsignaturasService } from '../../../../shared/services/mockups/asignaturas.service';
import { AyudantiasService } from '../../../../shared/services/mockups/ayudantias.service';

@Component({
  selector: 'app-ver-solicitud',
  templateUrl: './ver-solicitud.component.html',
  styleUrl: './ver-solicitud.component.css'
})
export class VerSolicitudComponent implements OnInit{
  solicitud?: Solicitud;

  constructor(private solicitudesService: SolicitudesService, private activatedRoute: ActivatedRoute,
    public estudiantesService: EstudiantesService, public asignaturasService: AsignaturasService,
    public ayudantiasService: AyudantiasService, private router: Router){}

  ngOnInit(): void {
    this.solicitud = this.solicitudesService.solicitudes.find(val => val.id_solicitud === +this.activatedRoute.snapshot.params['id_solicitud']);
    console.log(this.solicitud?.fecha.toString());
  }

  getAyudantiaString(solicitud: Solicitud) {
    const ayudantia = this.ayudantiasService.ayudantias.find(v => v.id_ayudantia === solicitud.id_ayudantia);
    const asignatura = this.asignaturasService.asignaturas.find(v => v.id_asignatura === ayudantia?.id_asignatura);
    return `${asignatura?.nombre} ${asignatura?.letra}`;
  }

  getNombreEstudiante(solicitud: Solicitud) {
    const estudiante = this.estudiantesService.estudiantes.find(v => v.id_usuario === solicitud.id_usuario);
    return `${estudiante?.nombre} ${estudiante?.apellido_paterno} ${estudiante?.apellido_materno}`;
  }

  getPromedioNotas(solicitud: Solicitud) {
    const estudiante = this.estudiantesService.estudiantes.find(v => v.id_usuario === solicitud.id_usuario);
    return estudiante?.promedio_notas;
  }

  cancelar() {
    this.router.navigate(['solicitudes']);
  }
}
