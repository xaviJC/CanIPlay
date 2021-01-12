import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sugerencias } from 'src/app/model/sugerencias'


@Injectable({
  providedIn: 'root'
})
export class ServicioSugerenciasService {

  private url = "http://localhost:3000/sugerirjuego"
  public sugerencia: Sugerencias;
  constructor(private http: HttpClient) { }

  addSugerencia(sugerencia: Sugerencias) {
    console.log(sugerencia)
    return this.http.post(this.url, sugerencia)
  }
}

