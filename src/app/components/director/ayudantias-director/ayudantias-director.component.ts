import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AyudantiasService } from '../../../shared/services/ayudantias.service';
import { Ayudantia } from '../../../models/ayudantia.model';
import { UsuariosService } from '../../../shared/services/usuarios.service';
import { AsignaturasService } from '../../../shared/services/asignaturas.service';
import { Asignatura } from '../../../models/asignatura.model';
import { Usuario } from '../../../models/usuario.model';
import { EmailService } from '../../../shared/services/email.service';

@Component({
  selector: 'app-ayudantias-director',
  templateUrl: './ayudantias-director.component.html',
  styleUrl: './ayudantias-director.component.css'
})
export class AyudantiasDirectorComponent {

  ayudantias: Ayudantia[] = [];
  usuarios: Usuario[] = [];
  asignaturas: Asignatura[] = [];

  constructor(
    private ayudantiasService: AyudantiasService,
    private usuariosService: UsuariosService,
    private asignaturasService: AsignaturasService,
    private emailService: EmailService) { }

  ngOnInit(): void {
    this.getAyudantias();
    this.getUsuarios();
    this.getAsignaturas();
  }

  getAyudantias() {
    this.ayudantiasService.getAyudantias().subscribe(
      (data) => {
        this.ayudantias = data
      }
    );
  }

  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data
      }
    );
  }

  getAsignaturas() {
    this.asignaturasService.getAsignaturas().subscribe(
      (data) => {
        this.asignaturas = data
      }
    );
  }

  aprobarAyudantia(ayudantia: Ayudantia) {
    ayudantia.estado = "Aprobado";
    this.ayudantiasService.updateAyudantia(ayudantia).subscribe(() => {
      this.emailService.sendEmail('kevin.rodast.95@gmail.com', 
      `Su solicitud de ayudantia para la asignatura ${this.getNombreAsignatura(ayudantia)} (${this.getGrupoAsignatura(ayudantia)}) a sido aprobada!`)
      .subscribe((data) => {});
      this.getAyudantias();
      }
    )
  }

  rechazarAyudantia(ayudantia: Ayudantia) {
    ayudantia.estado = "Rechazado";
    this.ayudantiasService.updateAyudantia(ayudantia).subscribe(() => {
      this.emailService.sendEmail('kevin.rodast.95@gmail.com', 
      `Su solicitud de ayudantia para la asignatura ${this.getNombreAsignatura(ayudantia)} (${this.getGrupoAsignatura(ayudantia)}) a sido rechazada!`)
      .subscribe((data) => {});
      this.getAyudantias();
      }
    )
  }

  reiniciarEstadoAyudantia(ayudantia: Ayudantia) {
    ayudantia.estado = "Creado";
    this.ayudantiasService.updateAyudantia(ayudantia).subscribe(
      () => {
        this.getAyudantias();
      }
    )
  }

  getNombreProfesor(ayudantia: Ayudantia) {
    const profe = this.usuarios.find(u => u.id_usuario === ayudantia.id_usuario);
    return profe?.nombre;
  }

  getRutProfesor(ayudantia: Ayudantia) {
    const profe = this.usuarios.find(u => u.id_usuario === ayudantia.id_usuario);
    return profe?.run;
  }

  getNombreAsignatura(ayudantia: Ayudantia) {
    const asignatura = this.asignaturas.find(a => a.id_asignatura === ayudantia.id_asignatura);
    return asignatura?.nombre;
  }

  getGrupoAsignatura(ayudantia: Ayudantia) {
    const asignatura = this.asignaturas.find(a => a.id_asignatura === ayudantia.id_asignatura);
    return asignatura?.letra;
  }
}
