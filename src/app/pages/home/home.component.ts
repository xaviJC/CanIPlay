import { Component, OnInit } from '@angular/core';
import { Charlas } from 'src/app/model/charlas';
import { ServicioCharlasService } from 'src/app/shared/servicio-charlas.service';
import { ServicioRankingService } from 'src/app/shared/servicio-ranking.service';
import { Juego } from 'src/app/models/juego';
import { JuegosService } from 'src/app/shared/juegos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  charlas:Charlas[];
  public ranking: any[]
  public imgPegis = {
    "pegi3": "../../../assets/pegi-icons/pegi-3.png",
    "pegi7": "../../../assets/pegi-icons/pegi-7.png",
    "pegi12": "../../../assets/pegi-icons/pegi-12.png",
    "pegi16": "../../../assets/pegi-icons/pegi-16.png",
    "pegi18": "../../../assets/pegi-icons/pegi-18.png"
  }
  constructor(private apicharlas:ServicioCharlasService, private apiServiceRanking: ServicioRankingService,private apiJuegos:JuegosService) {

   }
   
   juegoSeleccionado(game:Juego) {
    console.log("juegoSeleccionado")
    console.log(game)
    console.log("llamada a servicio")
    this.apiJuegos.setJuegoSeleccionado(game);
  }

  ngOnInit(): void {
    this.apicharlas.getCharlas().subscribe((data:Charlas[]) => {
      this.charlas = data;
      console.log(" this.charlas")
      console.log( this.charlas)
  
    })
    this.apiServiceRanking.getranking().subscribe((data:any[])=>{
      this.ranking = data
      console.log(this.ranking)
    })
  }

}
