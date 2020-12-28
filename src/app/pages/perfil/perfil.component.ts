import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from '../../shared/servicio-login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private apiServiceUsuario:ServicioLoginService) { }

  ngOnInit(): void {
    this.apiServiceUsuario.datos()

  }

}
