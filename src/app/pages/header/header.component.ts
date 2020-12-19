import { Component, OnInit } from '@angular/core';
import { ServicioPrincipalService } from '../../shared/servicio-principal.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public usuario:string;
  constructor(public autentificador:ServicioPrincipalService) { }

  ngOnInit(): void {
    this.usuario = this.autentificador.authenticate();

  }

}
