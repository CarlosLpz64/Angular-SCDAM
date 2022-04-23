import { Component, OnInit } from '@angular/core';
import { Zonas } from 'src/app/models/zonas';

@Component({
  selector: 'app-verzonas',
  templateUrl: './verzonas.component.html',
  styleUrls: ['./verzonas.component.css']
})
export class VerzonasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.faker();
    this.llenarNomb();
    this.miInterval = setInterval(() => {
      console.log('hi')
    }, 1000);
  }
  ngOnDestroy() {
    if (this.miInterval) {
      clearInterval(this.miInterval);
    }
  }

  miInterval: any;
  ListaZonas: Zonas[] = [];
  ListaNombre: string[] = [];

  aux !: Zonas;
  faker() {
    var aux = {
      id: 1,
      nombre: 'Edificio A'
    }
    this.ListaZonas.push(aux)
    var aux = {
      id:2,
      nombre:'Edificio B'
    }
    this.ListaZonas.push(aux)
    var aux = {
      id:3,
      nombre:'Edificio C'
    }
    this.ListaZonas.push(aux)
    var aux = {
      id:4,
      nombre:'Edificio D'
    }
    this.ListaZonas.push(aux)
    var aux = {
      id:5,
      nombre:'Area 1'
    }
    this.ListaZonas.push(aux)
    var aux = {
      id:6,
      nombre:'Area 2'
    }
    this.ListaZonas.push(aux)
    var aux = {
      id:7,
      nombre:'Area 3'
    }
    this.ListaZonas.push(aux)
  }
  llenarNomb(){
    this.ListaNombre = [];
    this.ListaZonas.forEach(i =>  {
      this.ListaNombre.push(i.nombre)
    });
  }
}
