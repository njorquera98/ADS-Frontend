import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AyudantiaService } from './services/ayudantia.service';

@Component({
  selector: 'app-ayudantias-director',
  templateUrl: './ayudantias-director.component.html',
  styleUrl: './ayudantias-director.component.css'
})
export class AyudantiasDirectorComponent {

  ayudantias: any = [];

  constructor(private ayudantiaService: AyudantiaService) { }

  ngOnInit(): void {
    this.getAyudantias();
  }

  getAyudantias() {
    this.ayudantiaService.index().subscribe(
      (data) => {
        console.log(data)
        this.ayudantias = data
      }
    );
  }

  aprobarAyudantia(id: number) {
    this.ayudantiaService.aprobar(id).subscribe(
      () => {
        this.getAyudantias();
      }
    )
  }

  rechazarAyudantia(id: number) {
    this.ayudantiaService.rechazar(id).subscribe(
      () => {
        this.getAyudantias();
      }
    )
  }

  reiniciarEstadoAyudantia(id: number) {
    this.ayudantiaService.reiniciarEstado(id).subscribe(
      () => {
        this.getAyudantias();
      }
    )
  }

}
