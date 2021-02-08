import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ServicioLoginService } from '../../shared/servicio-login.service';
import { Usuario } from '../../model/usuario'
import { Charlas } from 'src/app/model/charlas';
import { ServicioCharlasService } from 'src/app/shared/servicio-charlas.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-charlas',
  templateUrl: './charlas.component.html',
  styleUrls: ['./charlas.component.css']
})

export class CharlasComponent implements OnInit {
  faPlus = faPlus;
  faCalendarDay = faCalendarDay;
  faUsers = faUsers;
  faLink = faLink;
  isUserLoggedIn:boolean;
  usuarioRegistrado:any;
  charlas:Charlas[];
  tituloCharla: string;
  fechaCharla:string;
  charlasDefault:boolean ;
  id_charlaSeleccionada:number;
  charlaModal:any = {};
  apuntados:any = {};
  isApuntado:boolean = false;
  constructor(private apiServiceUsuario:ServicioLoginService,private apicharlas:ServicioCharlasService) { 
    this.apiServiceUsuario.usuarioRegistrado.subscribe( value => {
      this.usuarioRegistrado = value;
      console.log(this.usuarioRegistrado.id_usuario)
    })
  }

  buscador(titulo:string,fecha:string) {
    
    console.log("buscador")
    this.apicharlas.getCharlasBuscador(titulo,fecha).subscribe( (data:Charlas[]) => {
      if(data) {
        this.charlas = [];
        this.charlas = data;
      } else {
        console.log("no hay na")
      }
    })
  }

  handleChange(evt) {
    console.log("usuario")
    console.log(this.usuarioRegistrado)
    if (this.usuarioRegistrado.tipo_usuario === "") {

      swal.fire({
        icon: 'warning',
        title: 'Debes registrarte para ver la charla.',
        confirmButtonColor: "#371a6d",
      });
    }
  }

  reset() {
    this.charlasDefault = false; 
    this.apicharlas.getCharlas().subscribe((data:Charlas[]) => {
      this.charlas = data;
      this.isApuntado = true;
      console.log(data)
    })
  }

  charlaSeleccionada(id_charla:number) {    
    this.charlaModal = this.charlas[id_charla]
    // this.id_charlaSeleccionada = id_charla
    console.log(this.charlaModal)
    this.apicharlas.getApuntadosCharla(this.charlaModal.id_charla).subscribe(data => {
      this.apuntados = data[0]
      console.log(data[0])
    })
  }

  apuntarse(id_charla) {
    console.log(id_charla+""+this.usuarioRegistrado.id_usuario)
    this.apicharlas.insertApuntado(this.usuarioRegistrado.id_usuario,id_charla).subscribe(data => {
      alert("Gracias por apuntarse")
    })
  }

  ngOnInit(): void {
    this.charlasDefault = false;
    this.apiServiceUsuario.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
      console.log("comprobar user")
      console.log(this.isUserLoggedIn)
    }) 

    
    this.apicharlas.getCharlas().subscribe((data:Charlas[]) => {
      this.charlas = data;
      console.log(" this.charlas")
      console.log( this.charlas)
  
    })
  }

}
