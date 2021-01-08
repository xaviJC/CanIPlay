import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario'
import { Charlas } from 'src/app/model/charlas';
import { ServicioCharlasService } from 'src/app/shared/servicio-charlas.service';
import { ServicioLoginService } from '../../shared/servicio-login.service';

@Component({
  selector: 'app-paginacrearcharla',
  templateUrl: './paginacrearcharla.component.html',
  styleUrls: ['./paginacrearcharla.component.css']
})
export class PaginacrearcharlaComponent implements OnInit {
  usuarioRegistado;
  charla:Charlas;
  constructor(private apiServiceUsuario:ServicioLoginService,private apicharlas:ServicioCharlasService) {

   }

   crearCharla(titulo_charla,fecha_charla,descripcion_charla,resumen_charla,lugar_charla) {
     let params = [titulo_charla,fecha_charla,descripcion_charla,resumen_charla,lugar_charla,this.usuarioRegistado.id_usuario]
      this.apicharlas.insertCharla(new Charlas("",titulo_charla,fecha_charla,descripcion_charla,resumen_charla,lugar_charla,this.usuarioRegistado.id_usuario,"","")).subscribe((data) => {      
        console.log(data)
        alert("Gracias por crear una charla");
      })  
   }


  ngOnInit(): void {
    this.apiServiceUsuario.usuarioRegistrado.subscribe( value => {
      this.usuarioRegistado = value;
      console.log(this.usuarioRegistado)
    })
  }

}
