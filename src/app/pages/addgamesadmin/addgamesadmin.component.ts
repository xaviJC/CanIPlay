import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';
import { JuegosService } from 'src/app/shared/juegos.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-addgamesadmin',
  templateUrl: './addgamesadmin.component.html',
  styleUrls: ['./addgamesadmin.component.css']
})
export class AddgamesadminComponent implements OnInit {
  selectedItemsList:string [];
  checkboxesDataList = [
    {
      id: '0',
      label: 'PS4',
      isChecked: false
    },
    {
      id: '1',
      label: 'PS5',
      isChecked: false
    },
    {
      id: '2',
      label: 'XBOX Series X/S',
      isChecked: false
    },
    {
      id: '3',
      label: 'XBOX One',
      isChecked: false
    },
    {
      id: '4',
      label: 'Nintendo Switch',
      isChecked: false
    },
    {
      id: '5',
      label: 'PC',
      isChecked: false
    }
  ]


  public game: Juego;
  public urlCaratula:string = "";
  public pantallazo1:string = "";
  public pantallazo2:string = "";
  public pantallazo3:string = "";
  public pantallazo4:string = "";



  constructor(private serviceJuego:JuegosService, private router: Router) { 
    console.log("Funcionando Servicio")
  }

  getValue(e:any,id:string) {
    if(e.target.checked) {
      this.selectedItemsList.push(id)
      console.log(this.selectedItemsList)
    } else {
      console.log(id+"unchecked")
      this.selectedItemsList = this.selectedItemsList.filter(m=>m!=id)
      console.log(this.selectedItemsList)
    }
  }
  // id_juego: number, titulo_juego: string, genero: string, pegi: number, plataforma:string [],
  //   tarjeta_jugador: string, tarjeta_pagos: string, tarjeta_contenido: string, tarjeta_internet: string,
  //   caratula_juego: string, pantallazo1: string, pantallazo2: string, pantallazo3: string, pantallazo4: string,
  //   votos: number, puntuacionTotal: number, web_oficial: string
  addJuego( titulo_juego: string, genero: string, pegi: string,
    tarjeta_jugador: string, tarjeta_pagos: string, tarjeta_contenido: string, tarjeta_internet: string,
    caratula_juego: string, pantallazo1: string, pantallazo2: string, pantallazo3: string, pantallazo4: string,
    web_oficial: string){
      // console.log(this.selectedItemsList, titulo_juego, genero,pegi,tarjeta_jugador, tarjeta_pagos, tarjeta_contenido, tarjeta_internet, caratula_juego, pantallazo1,pantallazo2, pantallazo3, pantallazo4, web_oficial)
      this.serviceJuego.postJuego(new Juego(null, titulo_juego, genero,parseInt(pegi), this.selectedItemsList,
      tarjeta_jugador, tarjeta_pagos, tarjeta_contenido, tarjeta_internet, caratula_juego, pantallazo1, 
      pantallazo2, pantallazo3, pantallazo4,0, 0, web_oficial )) .subscribe((data)=>{
        swal.fire({
          icon: 'success',
          title: `${titulo_juego} se ha creado correctamente`,
          confirmButtonColor: "#371a6d",
          heightAuto: false
        })
        
        setTimeout(() => { this.router.navigate(["/buscarjuegos"]) }, 2000);
      })
      //      this.serviceJuego.postJuego(new Juego(null, titulo_juego, genero,parseInt(pegi), this.selectedItemsList,
      // tarjeta_jugador, tarjeta_pagos, tarjeta_contenido, tarjeta_internet, caratula_juego, pantallazo1, 
      // pantallazo2, pantallazo3, pantallazo4,0, 0, web_oficial )).subscribe((data)=>{})
  }

  ngOnInit(): void {
    this.selectedItemsList = new Array<string>();
  }

}
