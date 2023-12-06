import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AyudantiaService {
  private url: String = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {}

  index() {
    return this.http.get(`${this.url}/ayudantias/index`).pipe(
      map((res: any) => {
        return res.rows
      })
    );
  }

  aprobar(id: number) {
    return this.http.get(`${this.url}/ayudantias/aprobar/${id}`);
  }

  rechazar(id: number) {
    return this.http.get(`${this.url}/ayudantias/rechazar/${id}`);
  }

  reiniciarEstado(id: number) {
    return this.http.get(`${this.url}/ayudantias/reiniciar/${id}`);
  }
}
