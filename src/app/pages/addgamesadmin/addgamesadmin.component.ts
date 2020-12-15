import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addgamesadmin',
  templateUrl: './addgamesadmin.component.html',
  styleUrls: ['./addgamesadmin.component.css']
})
export class AddgamesadminComponent implements OnInit {
  public urlCaratula:string = "";
  public pantallazo1:string = "";
  public pantallazo2:string;
  public pantallazo3:string;
  public pantallazo4:string;


  constructor() { }

  ngOnInit(): void {
  }

}
