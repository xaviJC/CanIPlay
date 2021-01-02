import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from '../../shared/servicio-login.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public usuario:string;
  isUserLoggedIn: boolean;
  usuarioRegistado:Usuario;
  constructor(private apiServiceUsuario:ServicioLoginService) {
    this.apiServiceUsuario.usuarioRegistrado.subscribe( value => {
      this.usuarioRegistado = value;
      console.log(this.usuarioRegistado.tipo_usuario)
    })
   }

  ngOnInit(): void {

  }

}
