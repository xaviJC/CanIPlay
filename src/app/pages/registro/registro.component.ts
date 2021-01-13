import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from '../../shared/servicio-usuario.service';
import { Usuario } from '../../model/usuario'
import swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  constructor(private apiServiceUsuario: ServicioUsuarioService) { }

  createUsuario(nombre: string, apellido: string, hijos: string, email: string, password: string) {
    this.apiServiceUsuario.addUsuario(new Usuario(nombre, apellido, hijos, email, password, "usuario")).subscribe((data: Usuario) => {
      swal.fire({
        icon: 'success',
        title: 'Usuario Registrado',
        text: `Tu nombre de usuario es: ${email}`,
        confirmButtonColor: "#371a6d",
      });
    })
  }
  ngOnInit(): void {
  }

}
