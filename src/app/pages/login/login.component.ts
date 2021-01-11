import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from '../../shared/servicio-login.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  usuarioRegistado: Usuario;
  constructor(private apiServiceUsuario: ServicioLoginService, private router: Router) { }

  login(email: string, password: string) {
    console.log(email, password)
    this.apiServiceUsuario.loginServicio(email, password);

    console.log(this.usuarioRegistado)
    this.apiServiceUsuario.usuarioRegistrado.subscribe(value => {
      this.usuarioRegistado = value;
    })
  }


  ngOnInit(): void {
  }

}
