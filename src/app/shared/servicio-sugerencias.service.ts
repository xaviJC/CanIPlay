import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sugerencias } from 'src/app/model/sugerencias'
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ServicioSugerenciasService {

  private url = "http://localhost:3000/sugerirjuego"
  public sugerencia: Sugerencias;
  constructor(private http: HttpClient) { }

  addSugerencia(sugerencia: Sugerencias) {
    console.log(sugerencia)
    swal.fire({
      icon: 'success',
      title: 'Sugerencia recibida:',
      text: `${sugerencia.name}`,
      confirmButtonColor: "#371a6d",
    });
  }
}



