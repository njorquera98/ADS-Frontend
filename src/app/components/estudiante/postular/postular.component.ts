import { Component } from '@angular/core';
import { SolicitudesService } from '../../../shared/services/mockups/solicitudes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitud } from '../../../models/solicitud.model';
import { AyudantiasService } from '../../../shared/services/mockups/ayudantias.service';
import { Ayudantia } from '../../../models/ayudantia.model';
import { AsignaturasService } from '../../../shared/services/mockups/asignaturas.service';
import { EstudiantesService } from '../../../shared/services/mockups/estudiantes.service';
import { UsuariosService } from '../../../shared/services/mockups/usuarios.service';
import { AuthService } from '../../../shared/services/mockups/auth.service';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-postular',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './postular.component.html',
  styleUrl: './postular.component.css',
})
export class PostularComponent {
  constructor(
    public asignaturaService: AsignaturasService,
    private usuarioService: UsuariosService,
    private authService: AuthService,
    private solicitudService: SolicitudesService,
    private route: ActivatedRoute,
    private Router: Router
  ) {}
  idAyudantia: number = 0;
  nombreEstudiante?: string;
  solicitud: Solicitud = {
    id_solicitud: 2,
    id_ayudantia: 1,
    id_usuario: 0,
    fecha: new Date(Date.now()),
    estado: 'Postulado',
    id_periodo: 0,
    prioridad: 0,
    promedio_asignatura: 0,
    anteriormente_ayudante: false,
  };
  ngOnInit(): void {
    this.idAyudantia = Number(this.route.snapshot.paramMap.get('id_ayudantia'));
    this.solicitud.id_ayudantia = this.idAyudantia;
    const idUser = this.authService.cuenta_actual?.id_usuario;
    this.solicitud.id_usuario = idUser || 0;
    this.nombreEstudiante =
      this.usuarioService.obetenrUsuario(idUser || 0)?.nombre +
      ' ' +
      this.usuarioService.obetenrUsuario(idUser || 0)?.apellido_paterno +
      ' ' +
      this.usuarioService.obetenrUsuario(idUser || 0)?.apellido_materno;
  }

  Postular() {
    this.solicitud.id_usuario = this.authService.cuenta_actual?.id_usuario || 0;
    this.solicitudService.agregarSolicitud(this.solicitud);
    console.log(this.solicitud);
    this.Router.navigate(['/estudiante/ayudantias']);
  }
}
