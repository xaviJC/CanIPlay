import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from '../../shared/servicio-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiServiceUsuario:ServicioLoginService) { }

  login(email:string,password:string) {
    console.log(email,password)
    this.apiServiceUsuario.login(email,password);        
  }
  

  ngOnInit(): void {
  }

}
