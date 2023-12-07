import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../../models/solicitud.model';
import { SolicitudesService } from '../../../shared/services/solicitudes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudiantesService } from '../../../shared/services/estudiantes.service';
import { AsignaturasService } from '../../../shared/services/asignaturas.service';
import { AyudantiasService } from '../../../shared/services/ayudantias.service';
import { Ayudantia } from '../../../models/ayudantia.model';
import { Asignatura } from '../../../models/asignatura.model';
import { Estudiante } from '../../../models/estudiante.model';
import { Usuario } from '../../../models/usuario.model';
import { UsuariosService } from '../../../shared/services/usuarios.service';

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
  estudianteUsuario?: Usuario;

  constructor(private solicitudesService: SolicitudesService, private activatedRoute: ActivatedRoute,
    public estudiantesService: EstudiantesService, public asignaturasService: AsignaturasService,
    public ayudantiasService: AyudantiasService, private usuariosService: UsuariosService,
    private router: Router){}

  ngOnInit(): void {
    this.solicitudesService.getSolicitudById(+this.activatedRoute.snapshot.params['id_solicitud']).subscribe((data) => {
      if(data){
        this.solicitud = data;
        this.ayudantiasService.getAyudantiaById(this.solicitud.id_ayudantia).subscribe((data) => {
          if(data){
            this.ayudantia = data;
            this.asignaturasService.getAsignaturaById(this.ayudantia.id_asignatura).subscribe((data) => {
              if(data){
                this.asignatura = data;
              }
            });
          }
        });
        this.estudiantesService.getEstudianteById(this.solicitud?.id_usuario!).subscribe((data) => {
          if(data){
            this.estudiante = data;
            this.usuariosService.getUsuarioById(this.estudiante?.id_usuario!).subscribe((data) => {
              if(data){
                this.estudianteUsuario = data;
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
    return `${this.estudianteUsuario?.nombre} ${this.estudianteUsuario?.apellido_paterno} ${this.estudianteUsuario?.apellido_materno}`;
  }

  getPromedioNotas(solicitud: Solicitud) {
    return this.estudiante?.promedio_notas;
  }

  getUserImage(solicitud: Solicitud) {
    return this.estudianteUsuario?.image_url;
  }

  getEmailEstudiante() {
    return this.estudianteUsuario?.email;
  }

  cancelar() {
    this.router.navigate(['profesor/solicitudes']);
  }
}
