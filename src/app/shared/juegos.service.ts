import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Juego } from 'src/app/models/juego'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private url = "http://localhost:3000/juegos"
  private urlVoto = "http://localhost:3000/vote"
  public juego: Juego;
  constructor(private http: HttpClient) { }

  getGames(nombre:string,pegi:string,plataforma:string) {
    return this.http.get(`${this.url}?pegi=${pegi}&name=${nombre}&platform=${plataforma}`)
  }
  setJuegoSeleccionado(game:Juego) {
    this.juego = game;
    console.log("servicio de juego")
    console.log(this.juego)
  }
  getJuegoSeleccionado():Juego {
    return this.juego
  }

  addVoto(id_usuario,id_juego,voto,puntTotal,numVotos) {
    let params ={
      "id_usuario":id_usuario,
      "id_juego": id_juego,
      "voto": voto,
      "puntTotal":puntTotal,
      "numVotos": numVotos
    }
    return this.http.post(this.urlVoto,params)
  }

  getVoto(id_usuario,id_juego) {
    return this.http.get(`${this.urlVoto}?id_usuario=${id_usuario}&id_juego=${id_juego}`)
  }


}
