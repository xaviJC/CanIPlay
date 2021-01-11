import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from '../../shared/servicio-login.service';
import { Usuario } from 'src/app/model/usuario';
import { ServicioCharlasService } from 'src/app/shared/servicio-charlas.service';
import { ServicioUsuarioService } from 'src/app/shared/servicio-usuario.service';
import swal from'sweetalert2';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public usuario:string;
  titularAlerta:string = '';
  isUserLoggedIn: boolean;
  usuarioRegistado:any;
  charlasAtendidas:any;
  charlasImpartidas:any;
  constructor(private servicioLogin:ServicioLoginService,private apicharlas:ServicioCharlasService,private apiServicioUsuario:ServicioUsuarioService) {
    this.servicioLogin.usuarioRegistrado.subscribe( value => {
      this.usuarioRegistado = value;
      console.log(this.usuarioRegistado.tipo_usuario)
    })

    this.apicharlas.getImpartidas(this.usuarioRegistado.id_usuario).subscribe( value => {
      console.log("get imaprtidas")
      this.charlasImpartidas = value
      console.log(this.charlasImpartidas)
    })

    
    this.apicharlas.getApuntadosCharla(this.usuarioRegistado.id_usuario).subscribe( value => {
      console.log("get charlasAtendidas")
      this.charlasAtendidas = value
      console.log(this.charlasAtendidas)
    })
   }

   modificarPerfil(nombre:string,apellido:string,hijos:string,email:string) {
     this.apiServicioUsuario.setUsuario(this.usuarioRegistado.id_usuario,nombre,apellido,hijos,email).subscribe((data:any) => {
      
      if (data.affectedRows == 1) {
        swal.fire('Modificacion correcta.', this.titularAlerta, 'success');
      } else {
        swal.fire('Hubo un error', this.titularAlerta, 'error');
      }

     })
   }

  ngOnInit(): void {

  }

}
