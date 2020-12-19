import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrincipalService {
  public tipoUsuario:string;
  constructor() { }

  public authenticate():string {
    this.tipoUsuario = "user" ;
    return this.tipoUsuario;
  }

}
