import { Component, OnInit } from '@angular/core';
import { Sugerencias } from 'src/app/model/sugerencias';
import { ServicioSugerenciasService } from 'src/app/shared/servicio-sugerencias.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-paginasugerir',
  templateUrl: './paginasugerir.component.html',
  styleUrls: ['./paginasugerir.component.css']
})
export class PaginasugerirComponent implements OnInit {

  constructor(private ServicioSugerencias: ServicioSugerenciasService) { }
  crearSugerencia(name: string, platform: string) {
    this.ServicioSugerencias.addSugerencia(new Sugerencias(0, name, platform, 0)).subscribe((data: Sugerencias) => {
      swal.fire({
        icon: 'success',
        title: 'Sugerencia recibida:',
        text: `${name}`,
        confirmButtonColor: "#371a6d",
      });
    })
  }

  ngOnInit(): void {
  }

}
