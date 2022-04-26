import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Zonas } from 'src/app/models/zonas';
import { VarGlobalesService } from 'src/app/services/var-globales.service';
import { ZonasService } from 'src/app/servicios/zonas.service';

export interface ZonaElement {
  _id:number,
  name:string;
}

@Component({
  selector: 'app-verzonas',
  templateUrl: './verzonas.component.html',
  styleUrls: ['./verzonas.component.css']
})
export class VerzonasComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = [ 'nombre', 'eliminar'];
  dataSource !: MatTableDataSource<ZonaElement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ListaZonas: Zonas[] = [];

  constructor(private miServicio:ZonasService, public variablesGlobales: VarGlobalesService) { }
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.cargarInfo();
  }
  ngOnDestroy() {

  }

  miInterval: any;
  ListaNombre: string[] = [];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  cargarInfo(){
   this.miServicio.mostrarZonas().subscribe({
     next: (r) =>[
       console.log(r.data),
       this.ListaZonas = r.data,
       this.dataSource = new MatTableDataSource(this.ListaZonas),
       this.dataSource.sort = this.sort,
       this.dataSource.paginator = this.paginator],
       error: (e) => [console.error(e)],
       complete: () => [console.info('complete'),
      console.log(this.ListaZonas)
     ]
   })
   return
  }

  eliminarZona(id: any){
    this.miServicio.eliminarZonas(id).subscribe({
      next: (r) => [
        console.log(r)
      ],
      error: (e) => [console.error(e)],
      complete: () => [
        console.info('complete'),
        this.cargarInfo()
      ]
    })
  }
}
  
 
