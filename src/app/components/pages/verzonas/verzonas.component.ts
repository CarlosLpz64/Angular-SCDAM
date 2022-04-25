import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Zonas } from 'src/app/models/zonas';
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
  displayedColumns: string[] = [ 'name'];
  dataSource !: MatTableDataSource<ZonaElement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ListaZonas: Zonas[] = [];

  constructor(private miServicio:ZonasService) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.miInterval = setInterval(() => {
      console.log('hi')
    }, 1000);
    //  this.faker();
    this.cargarInfo();
  }
  ngOnDestroy() {
    if (this.miInterval) {
      clearInterval(this.miInterval);
    }
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
}

  
 

/* import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { GlobalesService } from 'src/app/services/globales.service';
import { UsersService } from 'src/app/services/users.service';

import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


export interface UserElement {
  username: string;
  email: number;
  role: number;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['username', 'email', 'role'];

  ListaModels: User[] = [];
  //dataSource: any;
  dataSource!: MatTableDataSource<UserElement>;

  constructor(
    private miService:UsersService, 
    private variablesGlobales: GlobalesService
    ) { 
      this.variablesGlobales.pageName = "USUARIOS";
    }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.cargarInfo();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTable(){
    this.cargarInfo()
  }

  cargarInfo(){
    this.miService.index().subscribe({
      next: (r) => [
      console.log(r.data),
      this.ListaModels = r.data,
      this.dataSource = new MatTableDataSource(r.data),
      this.dataSource.sort = this.sort,
      this.dataSource.paginator = this.paginator
    ],
      error: (e) => [console.error(e)],
      complete: () => console.info('complete') 
    })
  }

} */
