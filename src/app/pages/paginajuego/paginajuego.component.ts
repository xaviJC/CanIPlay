import { Component, OnInit } from '@angular/core';
import {  VanillaTiltSettings } from 'angular-tilt';
import { Juego } from 'src/app/models/juego';
import { JuegosService } from 'src/app/shared/juegos.service';

@Component({
  selector: 'app-paginajuego',
  templateUrl: './paginajuego.component.html',
  styleUrls: ['./paginajuego.component.css']
})
export class PaginajuegoComponent implements OnInit {
  public tiltSettings:VanillaTiltSettings;
  public juego: any;
    /**
   * Creo un json para guardar rutas de iconos pegi
   */
  public imgPegis = {
    "pegi3": "../../../assets/pegi-icons/pegi-3.png",
    "pegi7": "../../../assets/pegi-icons/pegi-7.png",
    "pegi12": "../../../assets/pegi-icons/pegi-12.png",
    "pegi16": "../../../assets/pegi-icons/pegi-16.png",
    "pegi18": "../../../assets/pegi-icons/pegi-18.png"
  }

  constructor(private apiJuegos:JuegosService) {
    this.juego = this.apiJuegos.juego;
   }

  ngOnInit(): void {
    
  }

}
