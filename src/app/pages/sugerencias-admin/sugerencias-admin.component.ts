import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  name: string;
  position: number;
  motivo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 0, name: 'Pes 2020', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 1, name: 'Super Mario bros ', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 2, name: 'Zelda', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 3, name: 'The last of s', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 4, name: 'Fifa 2020', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 5, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 6, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 7, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 8, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 10, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 11, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 12, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 13, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 14, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 15, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 16, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 17, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 18, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 19, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
  { position: 20, name: 'Super Mario bros', motivo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus adipisci itaque in pariatur" },
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-sugerencias-admin',
  templateUrl: './sugerencias-admin.component.html',
  styleUrls: ['./sugerencias-admin.component.css']
})
export class SugerenciasAdminComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'motivo', 'add', 'delete'];
  data = Object.assign(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Element>(this.data);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(algo) {
    console.log(this.dataSource.data)
    let index = algo.position;
    this.dataSource.data.splice(index, 1)
    this.dataSource = new MatTableDataSource<Element>(this.data);
  }
  /**
   * QUEDA METER FUNCIONALIDAD AL SLIDE BUTTON Y MAS COSAS
   */

  constructor() { }

  ngOnInit(): void {
  }

}
