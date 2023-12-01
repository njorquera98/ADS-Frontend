import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AsignaturasService } from '../../../shared/services/mockups/asignaturas.service';
import { Solicitud } from '../../../models/solicitud.model';
import { Asignatura } from '../../../models/asignatura.model';
import { AyudantiasService } from '../../../shared/services/mockups/ayudantias.service';
import { UsuariosService } from '../../../shared/services/mockups/usuarios.service';
import { EstudiantesService } from '../../../shared/services/mockups/estudiantes.service';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'profesor-modal',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ProfesorModalComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  @Input() solicitud?: Solicitud;
  asignatura?: Asignatura;
  constructor(
    public asignaturaService: AsignaturasService,
    public ayudantiaService: AyudantiasService,
    public usuarioService: UsuariosService,
    public estudiantesService: EstudiantesService
  ) {}
  ngOnInit(): void {
    console.log(this.solicitud);
    const id_asignatura = this.ayudantiaService.obtenerAyudantia(
      this.solicitud?.id_ayudantia || 0
    )?.id_asignatura;
    this.asignatura = this.asignaturaService.obtenerAsignatura(
      id_asignatura || 0
    );
  }
  closeModal() {
    this.closeModalEvent.emit();
  }
}
