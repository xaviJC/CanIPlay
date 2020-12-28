import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from '../../shared/servicio-usuario.service';
import { Usuario } from '../../model/usuario'



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  constructor(private apiServiceUsuario:ServicioUsuarioService) { }
  // constructor() { }

  createUsuario(nombre:string,apellido:string,hijos:string,email:string,password:string) {
    this.apiServiceUsuario.addUsuario(new Usuario(nombre,apellido,hijos,email,password)).subscribe((data:Usuario) => {      
      
    })  
  }

  ngOnInit(): void {
  }

}
