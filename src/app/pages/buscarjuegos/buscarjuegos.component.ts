import {Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';
import { JuegosService } from 'src/app/shared/juegos.service';



@Component({
  selector: 'app-buscarjuegos',
  templateUrl: './buscarjuegos.component.html',
  styleUrls: ['./buscarjuegos.component.css']
})
export class BuscarjuegosComponent implements OnInit {
  public notFound:boolean = false;
  public games:Juego[];
  public test = 1;
  public gameVarios;
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

  constructor(private apiJuegos:JuegosService) { }

  buscar(nombre:string,pegi:string,plataforma:string) {
    
    console.log("nombre,pegi,plataforma")
    console.log(nombre,pegi,plataforma)
      this.apiJuegos.getGames(nombre,pegi,plataforma).subscribe((data:Juego[]) => {
      console.log("data")
      if ( data.length === 0) {
        this.notFound = false;
      } else {
        this.notFound = true;

        this.games = data;        
        console.log(this.games)
      }
      console.log(this.notFound)
    })
    
  }

  juegoSeleccionado(game:Juego) {
    console.log("juegoSeleccionado")
    console.log(game)
    console.log("llamada a servicio")
    this.apiJuegos.setJuegoSeleccionado(game);
  }




  ngOnInit(): void {
  }

}
