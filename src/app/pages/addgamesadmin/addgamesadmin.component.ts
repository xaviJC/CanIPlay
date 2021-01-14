import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';
import { JuegosService } from 'src/app/shared/juegos.service';


@Component({
  selector: 'app-addgamesadmin',
  templateUrl: './addgamesadmin.component.html',
  styleUrls: ['./addgamesadmin.component.css']
})
export class AddgamesadminComponent implements OnInit {
  public game: Juego;
  public urlCaratula:string = "";
  public pantallazo1:string = "";
  public pantallazo2:string = "";
  public pantallazo3:string = "";
  public pantallazo4:string = "";



  constructor(private serviceJuego:JuegosService) { 
    console.log("Funcionando Servicio")
  }
  addJuego( titulo_juego: string, genero: string, pegi: number, plataforma: string,
    tarjeta_jugador: string, tarjeta_pagos: string, tarjeta_contenido: string, tarjeta_internet: string,
    caratula_juego: string, pantallazo1: string, pantallazo2: string, pantallazo3: string, pantallazo4: string,
    web_oficial: string){

      this.serviceJuego.postJuego(new Juego(null, titulo_juego, genero,pegi, plataforma,
      tarjeta_jugador, tarjeta_pagos, tarjeta_contenido, tarjeta_internet, caratula_juego, pantallazo1, 
      pantallazo2, pantallazo3, pantallazo4,0, 0, web_oficial )).subscribe((data)=>{})
  }

  ngOnInit(): void {
  }

}
