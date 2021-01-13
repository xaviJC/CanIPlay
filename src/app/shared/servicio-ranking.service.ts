import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Juego } from 'src/app/models/juego'

@Injectable({
  providedIn: 'root'
})
export class ServicioRankingService {
  private url = "http://localhost:3000/ranking"
  public juego: Juego
  constructor(private http: HttpClient) { }

    getranking() {
    return this.http.get(this.url + "/")
  }
}
