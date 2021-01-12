import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Juego } from 'src/app/models/juego'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private url = "http://localhost:3000/juegos"
  public juego: Juego;
  constructor(private http: HttpClient) { }

  getGames(nombre: string, pegi: string, plataforma: string) {
    return this.http.get(`${this.url}?pegi=${pegi}&name=${nombre}&platform=${plataforma}`)
  }
  setJuegoSeleccionado(game: Juego) {
    this.juego = game;
    console.log("servicio de juego")
    console.log(this.juego)
  }
  getJuegoSeleccionado(): Juego {
    return this.juego
  }
}
