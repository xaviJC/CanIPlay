import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Juego } from 'src/app/models/juego'
import {ServicioTop5Service} from 'src/app/shared/servicio-top5.service';
import {ServicioRankingService} from 'src/app/shared/servicio-ranking.service';

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

  constructor(private apiServiceTop5: ServicioTop5Service, private apiServiceRanking: ServicioRankingService) { 
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


  ngOnInit(): void {
  }

}
