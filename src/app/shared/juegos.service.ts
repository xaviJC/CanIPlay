import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Juego } from 'src/app/models/juego'

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private url = "http://localhost:3000/albums"
  public juego: Juego
  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(this.url + "/")
  }

  // me gustan las patatas fritas


}
