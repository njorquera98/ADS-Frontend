import { Component } from '@angular/core';
import { AyudantiasService } from '../../../shared/services/ayudantias.service';
import { Asignatura } from '../../../models/asignatura.model';
import { AsignaturasService } from '../../../shared/services/asignaturas.service';
import { AuthService } from '../../../shared/services/auth.service';
import { SolicitudesService } from '../../../shared/services/solicitudes.service';
import { EstudiantesService } from '../../../shared/services/estudiantes.service';
import { Estudiante } from '../../../models/estudiante.model';
import { Solicitud } from '../../../models/solicitud.model';
import { Ayudantia } from '../../../models/ayudantia.model';
import { Usuario } from '../../../models/usuario.model';
import { UsuariosService } from '../../../shared/services/usuarios.service';

interface UsuarioDeAyudantiaMap {
  [id_ayudantia: number]: Usuario[]
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(
    private ayudantiasService: AyudantiasService,
    private asignaturaService: AsignaturasService,
    private solicitudService: SolicitudesService,
    private authService: AuthService,
    private usuariosService: UsuariosService
  ) {}
  ayudantias: Ayudantia[] = [];
  asignaturas: Asignatura[] = [];
  solicitudes: Solicitud[] = [];
  usuarios: Usuario[] = [];
  usuariosDeAyudantia: UsuarioDeAyudantiaMap = {}

  ngOnInit() {
    this.ayudantiasService.getAyudantias().subscribe((data) => {
      this.ayudantias = data.filter(a => a.estado === "Aprobado");
      this.asignaturaService.getAsignaturas().subscribe((data) => {
        this.asignaturas = data;
      });
      this.solicitudService.getSolicitudes().subscribe((data) => {
        this.solicitudes = data;
        this.usuariosService.getUsuarios().subscribe((data) => {
          this.usuarios = data;

          for(const ayudantia of this.ayudantias) {
            const solicitudesDeAyudantia = this.solicitudes.filter(s => s.id_ayudantia === ayudantia.id_ayudantia && s.estado === "Aprobado");
            this.usuariosDeAyudantia[ayudantia.id_ayudantia] = [];
            for(const solicitud of solicitudesDeAyudantia) {
              const usuarioDeSolicitud = this.usuarios.find(e => e.id_usuario === solicitud.id_usuario);
              if(usuarioDeSolicitud){
                this.usuariosDeAyudantia[ayudantia.id_ayudantia].push(usuarioDeSolicitud);
              }
              console.log(this.usuariosDeAyudantia[ayudantia.id_ayudantia]);
            }
          }
        });
      });
    });
  }

  getAsignatura(id: number): Asignatura | undefined {
    return this.asignaturas.find(
      (asignatura: Asignatura) => asignatura.id_asignatura === id
    );
  }

  getEstadoSolicitud(idAyudantia: number): string {
    const solicitud = this.solicitudes.find(
      (sol: any) =>
        sol.id_ayudantia == idAyudantia &&
        sol.id_usuario == this.authService.getCuenta()?.id_usuario
    );
    return solicitud?.estado || 'Nada';
  }

  deleteSolicitud(idAyudantia: number) {
    const solicitud = this.solicitudes.find(
      (sol: any) =>
        sol.id_ayudantia == idAyudantia &&
        sol.id_usuario == this.authService.getCuenta()?.id_usuario
    );
    if (solicitud) {
      //console.log(solicitud);
      this.solicitudService.deleteSolicitud(solicitud.id_solicitud).subscribe((data) => {
        console.log(data);
        this.ayudantiasService.getAyudantias().subscribe((data) => {
          this.ayudantias = data.filter(a => a.estado === "Aprobado");
        });
        this.asignaturaService.getAsignaturas().subscribe((data) => {
          this.asignaturas = data;
        });
        this.solicitudService.getSolicitudes().subscribe((data) => {
          this.solicitudes = data;
        });
      });
    }
  }

  showModal: boolean[] = [];
  handleModal(i: number) {
    this.showModal[i] = !this.showModal[i];
  }
}
