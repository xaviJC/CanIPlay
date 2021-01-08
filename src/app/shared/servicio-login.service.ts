import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario'
import * as crypto from 'node_modules/crypto-js';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  private url = "http://localhost:3000/login"
  private usuario:Usuario = new Usuario("","","","","","");
  public usuarioRegistrado:BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>(this.usuario);
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient,private router:Router ) { }

  
    loginServicio(email:string,password:string){
    
    let hash = crypto.HmacSHA256(password, 'abc');
    let hashInBase64 = crypto.enc.Base64.stringify(hash);
    password = hashInBase64;

    let login:Usuario = new Usuario("","","",email,password,"")

    
    this.http.post(this.url,login).subscribe((data:Usuario) => {    
      
      this.usuario = data[0]
  
      if (typeof this.usuario === "undefined") {
        alert("Introduzca un email/password correcta")
      } else {
        
        this.usuarioRegistrado.next(data[0])
        alert(`Bienvenido ${this.usuario.nombre}`)
        this.isUserLoggedIn.next(true)
        this.router.navigate(["/perfil"])
      }
        
      
    })      
  }

  comprobarUsuarioLogeado() {
    
  }



    
}
