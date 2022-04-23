
import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';


@Component({
  selector: 'app-verusuarios',
  templateUrl: './verusuarios.component.html',
  styleUrls: ['./verusuarios.component.css']
})
export class VerusuariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.faker();
    this.llenarNFC();
    this.llenarNom();
    this.miInterval = setInterval(()=>{
      console.log('hi')
    }, 1000);
  }
  ngOnDestroy(){
    if (this.miInterval){
      clearInterval(this.miInterval);
    }
  }
    
  miInterval:any;
  ListaUsuarios: Usuarios[] = [];
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
  }

}
