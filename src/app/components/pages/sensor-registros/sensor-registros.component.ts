import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CookieService } from 'ngx-cookie-service';
import { Registros } from 'src/app/models/registros';
import { RegistrosService } from 'src/app/servicios/registros.service';

export interface RegistroElement {
  SensorID: number,
  Sensor:string,
  Unidad:string,
  Valor:number,
  Fecha: string
}

@Component({
  selector: 'app-sensor-registros',
  templateUrl: './sensor-registros.component.html',
  styleUrls: ['./sensor-registros.component.css']
})
export class SensorRegistrosComponent implements OnInit {

  displayedColumns: string[] = ['Sensor','Unidad','Valor','Fecha' ];
  dataSource !: MatTableDataSource<RegistroElement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ListaRegistro: Registros[] = [];

  constructor(private miServicio:RegistrosService, private cookie: CookieService) { }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }
 
  ngOnInit(): void {
    //  this.faker();
    this.cargarInfo();
  }
  ngOnDestroy() {

  }

  ListaValores:number[]=[];
  ListaFecha: string[] = [];
  titulito!: string;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  cargarInfo(){
    this.miServicio.mostrarRegistroSensor(this.cookie.get("Sensor")).subscribe({
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

  llenarVal(){
    this.ListaValores = [];
    this.ListaRegistro.forEach(i =>  {
      this.ListaValores.push(i.Valor)
    });
  }
  llenarFecha(){
    this.ListaFecha = []
    this.ListaRegistro.forEach(i => {
      //el 4 es el limit, porque ya esta estandarizado en el facker, y el 3 es la posicion del arreglo
      var aux = i.Fecha.split(" ",4)[3]
      this.ListaFecha.push(aux)
    })
  }

}
