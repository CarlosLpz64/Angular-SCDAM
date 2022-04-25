import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

export interface UserElement {
  _id:number,
  username: string;
  rol_id: number;
  email: string;
  password:string
}

@Component({
  selector: 'app-verusuarios',
  templateUrl: './verusuarios.component.html',
  styleUrls: ['./verusuarios.component.css']
})
export class VerusuariosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [ 'username', 'rol_id', 'email', 'eliminar', 'actualizar'];
  dataSource !: MatTableDataSource<UserElement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ListaUsuarios: Usuarios[] = [];

  constructor(private miServicio:UsuariosService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.cargarInfo();
  }
  ngOnDestroy() {

  }

  miInterval: any;
  ListaEmail: string[] = [];
  ListaNombre: string[] = []
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  cargarInfo(){
    this.miServicio.mostrarUsuarios().subscribe({
      next: (r) => [
      console.log(r.data),
      this.ListaUsuarios = r.data,
      this.dataSource = new MatTableDataSource(this.ListaUsuarios),
      this.dataSource.sort = this.sort,
      this.dataSource.paginator = this.paginator],
      error: (e) => [console.error(e)],
      complete: () => [console.info('complete'),    
      console.log(this.ListaUsuarios)
      ]
    })
    return
  }

  eliminarUser(id: number){
    this.miServicio.eliminarUsuarios(id).subscribe({
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


/** Builds and returns a new User. */


/* ngOnInit(): void {
  this.miInterval = setInterval(()=>{
    console.log('hi')
  }, 1000);
}
ngOnDestroy(){
  if (this.miInterval){
    clearInterval(this.miInterval);
  }
}
  
miInterval:any; */

/* ListaUsuarios: Usuarios[] = [];
ListaNFC: number[] = [];
ListaNombre: string[] = [];

aux !: Usuarios;
faker(){
  var aux = {
    id:1,
    nombre: 'America',
    NFC: 11
  }
  this.ListaUsuarios.push(aux)

  aux = {
    id:2,
    nombre: 'Brenda',
    NFC: 12
  }
  this.ListaUsuarios.push(aux)

  aux = {
    id:3,
    nombre: 'Carlos',
    NFC: 13
  }
  this.ListaUsuarios.push(aux)

  aux = {
    id:4,
    nombre: 'Arturo',
    NFC: 14
  }
  this.ListaUsuarios.push(aux)

  aux = {
    id:5,
    nombre: 'Mariano',
    NFC: 15
  }
  this.ListaUsuarios.push(aux)

  aux = {
    id:6,
    nombre: 'Alonso',
    NFC: 16
  }
  this.ListaUsuarios.push(aux)

  aux = {
    id:7,
    nombre: 'Kenneth',
    NFC: 17
  }
  this.ListaUsuarios.push(aux)

  aux = {
    id:8,
    nombre: 'Jhan',
    NFC: 18
  }
  this.ListaUsuarios.push(aux)

  aux = {
    id:9,
    nombre: 'Juan',
    NFC: 19
  }
  this.ListaUsuarios.push(aux)

  aux = {
    id:10,
    nombre: 'Victor',
    NFC: 20
  }
  this.ListaUsuarios.push(aux)
}
llenarNom(){
  this.ListaNombre = [];
  this.ListaUsuarios.forEach(i =>{
    this.ListaNombre.push(i.nombre)
  });
}
llenarNFC(){
  this.ListaNFC = []
  this.ListaUsuarios.forEach(i =>{
    this.ListaNFC.push(i.NFC)
  })
} */

