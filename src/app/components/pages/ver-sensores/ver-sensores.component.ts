import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SensorService } from 'src/app/services/sensor.service';

export interface RegistroElement {
  _id: string,
  nombre:string,
  nom:string,
}

@Component({
  selector: 'app-ver-sensores',
  templateUrl: './ver-sensores.component.html',
  styleUrls: ['./ver-sensores.component.css']
})
export class VerSensoresComponent implements OnInit {

  displayedColumns: string[] = ['Sensor','Zona','Nom Serie'];
  dataSource !: MatTableDataSource<RegistroElement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ListaRegistro: any[] = [];

  constructor(private miServicio:SensorService) { }

  ngOnInit(): void {
    this.cargarInfo();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  cargarInfo(){
    this.miServicio.index().subscribe({
      next: (r) => [
      console.log(r.data),
      this.ListaRegistro = r.data,
      this.dataSource = new MatTableDataSource(this.ListaRegistro),
      this.dataSource.sort = this.sort,
      this.dataSource.paginator = this.paginator],
      error: (e) => [console.error(e)],
      complete: () => [console.info('complete'),    
      console.log(this.ListaRegistro)
      ]
    })
    return
  }
}
