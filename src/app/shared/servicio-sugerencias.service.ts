import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sugerencias } from 'src/app/model/sugerencias'
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ServicioSugerenciasService {

  private url = "http://localhost:3000/sugerirjuego"
  private url2 = "http://localhost:3000/sugAdmin"
  public sugerencia: Sugerencias;
  constructor(private http: HttpClient) { }

  addSugerencia(sugerencia: Sugerencias) {
    return this.http.post(this.url, sugerencia)
  }

  getSugerencia() {
    return this.http.get(this.url2)
  }

}



