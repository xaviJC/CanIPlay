import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Juego } from 'src/app/models/juego'
import {ServicioTop5Service} from 'src/app/shared/servicio-top5.service';
import {ServicioRankingService} from 'src/app/shared/servicio-ranking.service';
import { JuegosService } from 'src/app/shared/juegos.service';

@Component({
  selector: 'app-topten',
  templateUrl: './topten.component.html',
  styleUrls: ['./topten.component.css']
})
export class ToptenComponent implements OnInit {
  public ranking: any[]
  public pegi3: any[]
  public pegi7: any[]
  public pegi12: any[]
  public pegi16: any[]
  public pegi18: any[]
  // public games:Juego[];
  // public game: Juego;
// 
  public imgPegis = {
    "pegi3": "../../../assets/pegi-icons/pegi-3.png",
    "pegi7": "../../../assets/pegi-icons/pegi-7.png",
    "pegi12": "../../../assets/pegi-icons/pegi-12.png",
    "pegi16": "../../../assets/pegi-icons/pegi-16.png",
    "pegi18": "../../../assets/pegi-icons/pegi-18.png"
  }
  constructor(private apiServiceTop5: ServicioTop5Service, private apiServiceRanking: ServicioRankingService, private apiJuegos:JuegosService) { 
  console.log("Funcionando servicio vista-disco")
  this.pegi3
  this.pegi7
  this.pegi12
  this.pegi16
  this.pegi18
  this.ranking

      this.apiServiceTop5.gettopfive(3).subscribe((data:any[])=>{
      this.pegi3 = data
      console.log(this.pegi3)
    })
      this.apiServiceTop5.gettopfive(7).subscribe((data:any[])=>{
      console.log(this.pegi7 = data)
      this.pegi7 = data
    })
      this.apiServiceTop5.gettopfive(12).subscribe((data:any[])=>{
      console.log(this.pegi12 = data)
      this.pegi12 = data
    })

      this.apiServiceTop5.gettopfive(16).subscribe((data:any[])=>{
      console.log(this.pegi16 = data)
      this.pegi16 = data
    })
      this.apiServiceTop5.gettopfive(18).subscribe((data:any[])=>{
      console.log(this.pegi18 = data)
      this.pegi18 = data
    })
      this.apiServiceRanking.getranking().subscribe((data:any[])=>{
      this.ranking = data
      console.log(this.ranking)
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
