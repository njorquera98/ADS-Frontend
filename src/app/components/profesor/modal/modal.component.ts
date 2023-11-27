import { Component, Output, EventEmitter } from '@angular/core';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ProfesorModalComponent {
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
