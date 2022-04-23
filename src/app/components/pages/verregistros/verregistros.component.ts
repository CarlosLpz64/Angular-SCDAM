import { Component, OnInit } from '@angular/core';
import { Registros } from 'src/app/models/registros';

@Component({
  selector: 'app-verregistros',
  templateUrl: './verregistros.component.html',
  styleUrls: ['./verregistros.component.css']
})
export class VerregistrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.faker();
    this.llenarFecha();
    this.llenarVal()
    
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
  ListaRegistro: Registros[] = [];
  ListaValores:number[]=[];
  ListaFecha: string[] = [];
  titulito!: string;

  aux !: Registros;
  faker(){
    var aux = {
      SensorID: 2, 
      Sensor:'PIR',
      Unidad:'sensor desactivado',
      Valor:61,
      Fecha: "2022 Apr 21 11:14:59"
    }
    this.ListaRegistro.push(aux)
    var aux = {
      SensorID: 2, 
      Sensor:'PIR',
      Unidad:'sensor desactivado',
      Valor:24,
      Fecha: "2022 Apr 21 11:15:59"
    }
    this.ListaRegistro.push(aux)
    var aux = {
      SensorID: 2, 
      Sensor:'PIR',
      Unidad:'sensor desactivado',
      Valor:1,
      Fecha: "2022 Apr 21 11:16:59"
    }
    this.ListaRegistro.push(aux)
    var aux = {
      SensorID: 2, 
      Sensor:'PIR',
      Unidad:'sensor desactivado',
      Valor:90,
      Fecha: "2022 Apr 21 11:17:59"
    }
    this.ListaRegistro.push(aux)
    var aux = {
      SensorID: 2, 
      Sensor:'PIR',
      Unidad:'sensor desactivado',
      Valor:55,
      Fecha: "2022 Apr 21 11:18:59"
    }
    this.ListaRegistro.push(aux)
    var aux = {
      SensorID: 2, 
      Sensor:'PIR',
      Unidad:'sensor desactivado',
      Valor:35,
      Fecha: "2022 Apr 21 11:19:59"
    }
    this.ListaRegistro.push(aux)
    var aux = {
      SensorID: 2, 
      Sensor:'PIR',
      Unidad:'sensor desactivado',
      Valor:41,
      Fecha: "2022 Apr 21 11:20:59"
    }
    this.ListaRegistro.push(aux)
    var aux = {
      SensorID: 2, 
      Sensor:'PIR',
      Unidad:'sensor desactivado',
      Valor:12,
      Fecha: "2022 Apr 21 11:21:59"
    }
    this.ListaRegistro.push(aux)
    var aux = {
      SensorID: 2, 
      Sensor:'PIR',
      Unidad:'sensor desactivado',
      Valor:72,
      Fecha: "2022 Apr 21 11:22:59"
    }
    this.ListaRegistro.push(aux)
    var aux = {
      SensorID: 2, 
      Sensor:'PIR',
      Unidad:'sensor desactivado',
      Valor:3,
      Fecha: "2022 Apr 21 11:23:59"
    }
    this.ListaRegistro.push(aux)

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
