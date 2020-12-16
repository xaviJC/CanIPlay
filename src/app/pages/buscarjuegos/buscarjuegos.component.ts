import {AfterViewInit, Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  caratula: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 0, name: 'Pes 2020', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 1, name: 'Super Mario bros ', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 2, name: 'Zelda', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 3, name: 'The last of s', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 4, name: 'Fifa 2020', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 5, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 6, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 7, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 8, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 10, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 11, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 12, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 13, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 14, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 15, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 16, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 17, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 18, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 19, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
  {position: 20, name: 'Super Mario bros', caratula: 'https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'},
];


@Component({
  selector: 'app-buscarjuegos',
  templateUrl: './buscarjuegos.component.html',
  styleUrls: ['./buscarjuegos.component.css']
})
export class BuscarjuegosComponent implements OnInit {
  public notFound:boolean = false;
  displayedColumns: string[] = [ 'caratula','name','ver'];
  data = Object.assign( ELEMENT_DATA);
  dataSource = new MatTableDataSource<Element>(this.data);  
  selection = new SelectionModel<PeriodicElement>(true, []);


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  applyFilter(event: Event) {
    console.log(event)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.filteredData.length === 0) {
      this.notFound = true;
    } else{
      this.notFound = false
    }
  }

/**
 * QUEDA METER FUNCIONALIDAD AL SLIDE BUTTON Y MAS COSAS
 */
  constructor() { }

  ngOnInit(): void {
  }

}
