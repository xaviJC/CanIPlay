import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { ServicioLoginService } from 'src/app/shared/servicio-login.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public usuario: string;
  isUserLoggedIn: boolean;
  usuarioRegistado: Usuario;
  constructor(public apiServiceUsuario: ServicioLoginService, private router: Router) {
    // Subscribe here, this will automatically update
    // "isUserLoggedIn" whenever a change to the subject is made.
    this.apiServiceUsuario.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
      // console.log("this.isUserLoggedIn")
      // console.log(this.isUserLoggedIn)
    });
    this.apiServiceUsuario.usuarioRegistrado.subscribe(value => {
      // console.log("value")
      // console.log(value)
      // this.usuarioRegistado = value;
      if (typeof value === 'undefined') {
        this.usuarioRegistado.nombre = "";
        this.usuarioRegistado.apellido = "";
        this.usuarioRegistado.hijos = "";
        this.usuarioRegistado.email = "";
        this.usuarioRegistado.password = "";
        this.usuarioRegistado.tipo_usuario = "";

      } else {
        this.usuarioRegistado = value;
      }

    })
  }

  logout() {
    this.usuarioRegistado.nombre = "";
    this.usuarioRegistado.apellido = "";
    this.usuarioRegistado.hijos = "";
    this.usuarioRegistado.email = "";
    this.usuarioRegistado.password = "";
    this.usuarioRegistado.tipo_usuario = "";
    this.apiServiceUsuario.isUserLoggedIn.next(false)
  }

  ngOnInit(): void {

  }

}
