import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServices } from '../../../shared/services/auth.service';
import { AsignaturasServices } from '../../../shared/services/asignaturas.service';
import { UsuariosServices } from '../../../shared/services/usuarios.service';
import { SolicitudesServices } from '../../../shared/services/solicitudes.service';
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
    private asignaturaService: AsignaturasServices,
    private usuarioService: UsuariosServices,
    private authService: AuthServices,
    private solicitudService: SolicitudesServices,
    private route: ActivatedRoute,
    private Router: Router
  ) {}
  idAyudantia: number = 0;
  nombreEstudiante?: string;
  solicitud = {
    id_ayudantia: 0,
    id_usuario: 0,
    fecha: new Date(Date.now()).toISOString(),
    estado: 'Creado',
    id_periodo: 0,
    prioridad: 0,
    promedio_asignatura: 0,
    anteriormente_ayudante: false,
  };
  asignaturas: any = [];
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
    this.asignaturaService.getAsignaturas().subscribe((data) => {
      console.log(data);
      this.asignaturas = data;
    });
  }
  obtenerAsignatura(id: number): any {
    return this.asignaturas.find(
      (asignatura: any) => asignatura.id_asignatura === id
    );
  }

  Postular() {
    this.solicitud.fecha = new Date(Date.now()).toISOString();
    this.solicitud.estado = 'Creado';
    this.solicitud.id_periodo = 1; // Revisar logica
    console.log('solicitud de postular', this.solicitud);
    this.solicitudService.createSolicitud(this.solicitud).subscribe((res) => {
      if (res) {
        this.Router.navigate(['/estudiante/ayudantias']);
      } else {
        console.log('no se pudo crear la solicitud');
      }
    });
  }
}
