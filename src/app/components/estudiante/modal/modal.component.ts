import { Component, Output, EventEmitter, Input } from '@angular/core';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'estudiante-modal',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class EstudianteModalComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  @Input() idAyudantia: number = 0;

  closeModal() {
    this.closeModalEvent.emit();
  }
}
