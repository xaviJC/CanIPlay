import { Component, OnInit } from '@angular/core';
import { Sugerencias } from 'src/app/model/sugerencias';
import { ServicioSugerenciasService } from 'src/app/shared/servicio-sugerencias.service';

@Component({
  selector: 'app-paginasugerir',
  templateUrl: './paginasugerir.component.html',
  styleUrls: ['./paginasugerir.component.css']
})
export class PaginasugerirComponent implements OnInit {

  constructor(private ServicioSugerencias: ServicioSugerenciasService) { }
  // crearSugerencia(name: string, platform: string) {
  //   this.ServicioSugerencias.addSugerencia(new Sugerencias(0, name, platform, 0)).subscribe((data: Sugerencias) => {
  //   })
  // }

  ngOnInit(): void {
  }

}
