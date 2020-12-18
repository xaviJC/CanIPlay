import { Component, OnInit } from '@angular/core';
import {  VanillaTiltSettings } from 'angular-tilt';

@Component({
  selector: 'app-paginajuego',
  templateUrl: './paginajuego.component.html',
  styleUrls: ['./paginajuego.component.css']
})
export class PaginajuegoComponent implements OnInit {
  public tiltSettings:VanillaTiltSettings;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
