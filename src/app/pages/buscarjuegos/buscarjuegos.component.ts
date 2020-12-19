import {AfterViewInit, Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';

// export interface PeriodicElement {
//   nombre:string;
//   caratula: string;
//   pegi: string;
//   plataforma: string;
// }

// const GAMES= [
//   {nombre: "Ratchet and Clank", caratula: 'https://images-na.ssl-images-amazon.com/images/I/918fggv3mhL._AC_SL1500_.jpg', pegi: 'https://pegi.info/themes/pegi/public-images/pegi/pegi7.png', plataforma: "PS4"},
//   {nombre: "Just Dance", caratula: 'https://images-na.ssl-images-amazon.com/images/I/71bGgd8pRqL._AC_SL1500_.jpg', pegi: 'https://pegi.info/themes/pegi/public-images/pegi/pegi3.png', plataforma: "PS4/XBOX/SWITCH"},
//   {nombre: "Super Mario Party", caratula: 'https://images-na.ssl-images-amazon.com/images/I/81PlF%2BHTScL._AC_SL1500_.jpg', pegi: 'https://pegi.info/themes/pegi/public-images/pegi/pegi7.png', plataforma: "SWITCH"},
//   {nombre: "Sonic Riders Gravity", caratula: 'https://images-na.ssl-images-amazon.com/images/I/91jlcmC4jML._AC_SL1500_.jpg', pegi: 'https://pegi.info/themes/pegi/public-images/pegi/pegi7.png', plataforma: "PS2"},
//   {nombre: "The last of us ", caratula: 'https://es.static.webuy.com/product_images/Juegos/PS4%20Juegos/711719407515_l.jpg', pegi: 'https://pegi.info/themes/pegi/public-images/pegi/pegi18.png', plataforma: "PS2"},
//   {nombre: "FIFA 2021", caratula: 'https://es.static.webuy.com/product_images/Juegos/PS4%20Juegos/5030930124434_l.jpg', pegi: 'https://pegi.info/themes/pegi/public-images/pegi/pegi3.png', plataforma: "XBOX/PS4/SWITCH"},

// ];


@Component({
  selector: 'app-buscarjuegos',
  templateUrl: './buscarjuegos.component.html',
  styleUrls: ['./buscarjuegos.component.css']
})
export class BuscarjuegosComponent implements OnInit {
  public notFound:boolean = false;
  public games= [
    {nombre: "Ratchet and Clank", caratula: 'https://images-na.ssl-images-amazon.com/images/I/918fggv3mhL._AC_SL1500_.jpg',pegi : "PEGI 7", pegiURL: 'https://pegi.info/themes/pegi/public-images/pegi/pegi7.png', plataforma: "PS4"},
    {nombre: "Just Dance", caratula: 'https://images-na.ssl-images-amazon.com/images/I/71bGgd8pRqL._AC_SL1500_.jpg',pegi : "PEGI 3", pegiURL: 'https://pegi.info/themes/pegi/public-images/pegi/pegi3.png', plataforma: "PS4/XBOX/SWITCH"},
    {nombre: "Super Mario Party", caratula: 'https://images-na.ssl-images-amazon.com/images/I/81PlF%2BHTScL._AC_SL1500_.jpg',pegi : "PEGI 7", pegiURL: 'https://pegi.info/themes/pegi/public-images/pegi/pegi7.png', plataforma: "SWITCH"},
    {nombre: "Sonic Riders Gravity", caratula: 'https://images-na.ssl-images-amazon.com/images/I/91jlcmC4jML._AC_SL1500_.jpg',pegi : "PEGI 7", pegiURL: 'https://pegi.info/themes/pegi/public-images/pegi/pegi7.png', plataforma: "PS2"},
    {nombre: "The last of us", caratula: 'https://es.static.webuy.com/product_images/Juegos/PS4%20Juegos/711719407515_l.jpg',pegi : "PEGI 18", pegiURL: 'https://pegi.info/themes/pegi/public-images/pegi/pegi18.png', plataforma: "PS4"},
    {nombre: "FIFA 2021", caratula: 'https://es.static.webuy.com/product_images/Juegos/PS4%20Juegos/5030930124434_l.jpg',pegi : "PEGI 3", pegiURL: 'https://pegi.info/themes/pegi/public-images/pegi/pegi3.png', plataforma: "XBOX/PS4/SWITCH"},  
  ];
  public game;
  public gameVarios;

  buscar(nombre:string,pegi:string) {
    
    let nombreSpaces = nombre.trim();
    console.log(pegi)
    this.gameVarios = this.games.filter(x => x.pegi.includes(pegi))
    console.log(this.gameVarios)
    if(this.gameVarios != "" ){
      console.log("entro")
      this.notFound = true;
    } else {
      this.notFound = false
    }
    
  }
  // displayedColumns: string[] = [ 'caratula','name','ver'];
  // data = Object.assign( ELEMENT_DATA);
  // dataSource = new MatTableDataSource<Element>(this.data);  
  // selection = new SelectionModel<PeriodicElement>(true, []);


  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
  
  // applyFilter(event: Event) {
  //   console.log(event)
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.filteredData.length === 0) {
  //     this.notFound = true;
  //   } else{
  //     this.notFound = false
  //   }
  // }

/**
 * QUEDA METER FUNCIONALIDAD AL SLIDE BUTTON Y MAS COSAS
 */
  constructor() { }

  ngOnInit(): void {
  }

}
