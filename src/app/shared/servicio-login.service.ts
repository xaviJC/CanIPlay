import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario'
import * as crypto from 'node_modules/crypto-js';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  private url = "http://localhost:3000/login"
  private usuario:Usuario;
  constructor(private http:HttpClient,private router:Router) { }

  
    login(email:string,password:string){
    
    let hash = crypto.HmacSHA256(password, 'abc');
    let hashInBase64 = crypto.enc.Base64.stringify(hash);
    password = hashInBase64;
    console.log(email,password)
    let login:Usuario = new Usuario("","","",email,password)
    console.log("login")
    console.log(login)
    
    this.http.post(this.url,login).subscribe((data:Usuario) => {      
      this.usuario = data[0]
      this.router.navigate(["/perfil"])
    })      
  }
  datos() {
    console.log(this.usuario)
  }

    
}
