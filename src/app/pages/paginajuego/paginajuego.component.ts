import { Component, OnInit } from '@angular/core';
import { VanillaTiltSettings } from 'angular-tilt';
import { Juego } from 'src/app/models/juego';
import { JuegosService } from 'src/app/shared/juegos.service';
import { ServicioLoginService } from 'src/app/shared/servicio-login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-paginajuego',
  templateUrl: './paginajuego.component.html',
  styleUrls: ['./paginajuego.component.css']
})
export class PaginajuegoComponent implements OnInit {
  public tiltSettings: VanillaTiltSettings;
  public juego: any;
  usuarioRegistrado: any;
  isUserLoggedIn: boolean;
  titularAlerta: string = '';
  public notaMedia: string;

  public imgPegis = {
    "pegi3": "../../../assets/pegi-icons/pegi-3.png",
    "pegi7": "../../../assets/pegi-icons/pegi-7.png",
    "pegi12": "../../../assets/pegi-icons/pegi-12.png",
    "pegi16": "../../../assets/pegi-icons/pegi-16.png",
    "pegi18": "../../../assets/pegi-icons/pegi-18.png"
  }

  constructor(private apiJuegos: JuegosService, private apiServiceUsuario: ServicioLoginService) {
    this.juego = this.apiJuegos.juego;
    console.log(this.juego.puntuacionTotal + "/" + this.juego.votos)
    this.notaMedia = (this.juego.puntuacionTotal / this.juego.votos).toFixed(2);
    // this.notaMedia = this.notaMedia.toFixed(2);
    this.apiServiceUsuario.usuarioRegistrado.subscribe(value => {
      this.usuarioRegistrado = value;
      console.log(this.usuarioRegistrado)
    })
  }

  handleChange(evt) {
    if (this.usuarioRegistrado.tipo_usuario) {
      this.apiJuegos.getVoto(this.usuarioRegistrado.id_usuario, this.juego.id_juego).subscribe((data) => {
        console.log(data[0])
        if (data[0]) {
          swal.fire({
            icon: 'warning',
            title: 'Ya votaste éste juego',
            confirmButtonColor: "#371a6d",
          });

        } else {
          var target = evt.target;
          let voto = parseInt(target.value);
          let puntTotal = this.juego.puntuacionTotal + voto;
          let numVotos = this.juego.votos + 1;
          console.log("this.usuarioRegistrado.id_usuario,this.juego.id_juego,voto,puntTotal,numVotos")
          console.log(this.usuarioRegistrado.id_usuario, this.juego.id_juego, voto, puntTotal, numVotos)
          this.apiJuegos.addVoto(this.usuarioRegistrado.id_usuario, this.juego.id_juego, voto, puntTotal, numVotos).subscribe((data) => {
            swal.fire({
              icon: 'success',
              title: '¡Gracias por votar!',
              confirmButtonColor: "#371a6d",
            });
          })
        }
      })
    } else {
      swal.fire({
        icon: 'warning',
        title: 'Debes registrarte para votar.',
        confirmButtonColor: "#371a6d",
      });
    }
  }

  ngOnInit(): void {
    this.apiServiceUsuario.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
      console.log("comprobar user")
      console.log(this.isUserLoggedIn)
    })
  }
}
