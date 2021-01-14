import { Component, OnInit } from '@angular/core';
import { Charlas } from 'src/app/model/charlas';
import { ServicioCharlasService } from 'src/app/shared/servicio-charlas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  charlas:Charlas[];
  constructor(private apicharlas:ServicioCharlasService) { }

  ngOnInit(): void {
    this.apicharlas.getCharlas().subscribe((data:Charlas[]) => {
      this.charlas = data;
      console.log(" this.charlas")
      console.log( this.charlas)
  
    })
  }

}
