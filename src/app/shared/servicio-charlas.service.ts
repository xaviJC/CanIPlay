import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario'
import { Charlas } from '../model/charlas'

@Injectable({
  providedIn: 'root'
})
export class ServicioCharlasService {
  private url = "http://localhost:3000/charlas"
  private urlBuscador = "http://localhost:3000/charlasBuscador"
  private urlCharlas = "http://localhost:3000/charlasApuntarse"
  private urlImpartidas= "http://localhost:3000/charlasImpartidas"
  private urlApuntado= "http://localhost:3000/charlasAsistidas"
  public charlas:Charlas[];
  constructor(private http:HttpClient) { }

  getCharlas() {
    return this.http.get(this.url);
  }
  getCharlasBuscador(titulo:string,fecha:string) {
    return this.http.get(`${this.urlBuscador}?charla_titulo=${titulo}&charla_fecha=${fecha}`);
  }

  insertCharla(charla:Charlas) {
    
    console.log("params desde sercivio")
    console.log(charla)
    return this.http.post(this.url,charla)
  }

  getApuntadosCharla(id_usuario:string) {
    console.log("id_charla")
    console.log(id_usuario)
    return this.http.get(`${this.urlApuntado}?id_usuario=${id_usuario}`)
  }

  insertApuntado(id_usuario,id_charla) {
    let params = {id_usuario,id_charla}
    return this.http.post(this.urlCharlas,params)
  }

  getImpartidas(id_usuario) {
    return this.http.get(`${this.urlImpartidas}?id_usuario=${id_usuario}`)
  }
}
