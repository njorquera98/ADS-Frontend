import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SolicitudesServices {
  private API_SERVER = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}
  getSolicitudes() {
    return this.http.get(this.API_SERVER + '/solicitudes');
  }
  // createSolicitud(solicitud: any) {
  //   return this.http.post(this.API_SERVER + '/solicitudes', solicitud);
  // }
  createSolicitud(solicitud: any) {
    fetch(this.API_SERVER + '/solicitudes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(solicitud),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        this.router.navigate(['/estudiante/ayudantias']);
      } else {
        console.log('no se pudo crear la solicitud');
      }
    });
  }

  deleteSolicitud(id: number) {
    fetch(this.API_SERVER + '/solicitudes/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 204) {
        window.location.reload();
      } else {
        console.log('no se pudo eliminar la solicitud');
      }
    });
  }
}
