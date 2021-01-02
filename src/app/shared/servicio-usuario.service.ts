import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario'
import * as crypto from 'node_modules/crypto-js';


@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  private url = "http://localhost:3000/registro"
  private usuario:Usuario;
  constructor(private http:HttpClient) { }

  public addUsuario(newUsuario:Usuario) {
    console.log(newUsuario.password)
    let hash = crypto.HmacSHA256(newUsuario.password, 'abc');
    let hashInBase64 = crypto.enc.Base64.stringify(hash);
    newUsuario.password = hashInBase64;

    return this.http.post(this.url,newUsuario)
    
  }
}
