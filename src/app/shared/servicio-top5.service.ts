import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Juego } from 'src/app/models/juego'

@Injectable({
  providedIn: 'root'
})
export class ServicioTop5Service {

  private url = "http://localhost:3000/topfive"
  public juego: Juego
  constructor(private http: HttpClient) { }

  gettopfive(pegi: number) {
    return this.http.get(this.url + "?pegi="+pegi)
  }



}
