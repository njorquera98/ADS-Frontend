import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturasService } from '../../../shared/services/asignaturas.service';
import { UsuariosService } from '../../../shared/services/usuarios.service';
import { AuthService } from '../../../shared/services/auth.service';
import { SolicitudesService } from '../../../shared/services/solicitudes.service';
import { Asignatura } from '../../../models/asignatura.model';
import { Solicitud } from '../../../models/solicitud.model';


@Component({
  selector: 'app-postular',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './postular.component.html',
  styleUrl: './postular.component.css',
})
export class PostularComponent {
  constructor(
    private asignaturaService: AsignaturasService,
    private usuarioService: UsuariosService,
    private authService: AuthService,
    private solicitudService: SolicitudesService,
    private route: ActivatedRoute,
    private Router: Router
  ) {}
  idAyudantia: number = 0;
  nombreEstudiante?: string;
  solicitud: Solicitud = {
    id_solicitud: -1,
    id_ayudantia: 0,
    id_usuario: 0,
    fecha: new Date(Date.now()),
    estado: 'Creado',
    id_periodo: 0,
    prioridad: 0,
    promedio_asignatura: 0,
    anteriormente_ayudante: false,
  };
  asignaturas: Asignatura[] = [];
  ngOnInit(): void {
    this.idAyudantia = Number(this.route.snapshot.paramMap.get('id_ayudantia'));
    this.solicitud.id_ayudantia = this.idAyudantia;
    const idUser = this.authService.cuenta_actual?.id_usuario;
    this.solicitud.id_usuario = idUser || 0;
    this.usuarioService.getUsuarioById(idUser || 0).subscribe((data) => {
      this.nombreEstudiante = data.nombre +
      ' ' +
      data.apellido_paterno +
      ' ' +
      data.apellido_materno;
    });
    this.asignaturaService.getAsignaturas().subscribe((data) => {
      this.asignaturas = data;
    });
  }
  getAsignatura(id: number): any {
    return this.asignaturas.find(
      (asignatura: any) => asignatura.id_asignatura === id
    );
  }

  cambiarPrioridadSolicitud(event: any) {
    this.solicitud.prioridad = +event;
  }

  Postular() {
    this.solicitud.fecha = new Date(Date.now());
    this.solicitud.estado = 'Creado';
    this.solicitud.id_periodo = 1;
    this.solicitudService.createSolicitud(this.solicitud).subscribe((data) => {
      console.log(data);
    });
  }
}
