import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from '../../shared/servicio-login.service';
import { Usuario } from 'src/app/model/usuario';
import { ServicioCharlasService } from 'src/app/shared/servicio-charlas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public usuario: string;
  isUserLoggedIn: boolean;
  usuarioRegistado: any;
  charlasAtendidas: any;
  charlasImpartidas: any;
  constructor(private apiServiceUsuario: ServicioLoginService, private apicharlas: ServicioCharlasService) {
    // this.apiServiceUsuario.usuarioRegistrado.subscribe(value => {
    //   this.usuarioRegistado = value;
    //   if (this.usuarioRegistado.tipo_usuario === "admin") {
    //     // console.log(this.usuarioRegistado.tipo_usuario)
    //     // console.log("hola")
    //   }
    // })
    this.usuarioRegistado = this.apiServiceUsuario.usuario

    this.apicharlas.getImpartidas(this.usuarioRegistado.id_usuario).subscribe(value => {
      // console.log("get imaprtidas")
      this.charlasImpartidas = value
      // console.log(this.charlasImpartidas)
    })

    this.apicharlas.getApuntadosCharla(this.usuarioRegistado.id_usuario).subscribe(value => {
      // console.log("get charlasAtendidas")
      this.charlasAtendidas = value
      // console.log(this.charlasAtendidas)
    })
  }

  ngOnInit(): void {

  }

}
