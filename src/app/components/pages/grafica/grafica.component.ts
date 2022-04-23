import { Component, OnInit, ViewChild } from '@angular/core';
import { Registros } from 'src/app/models/registros';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.faker();
    this.llenarVal();
    this.llenarFecha();
    this.regresarValor();
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

  ListaReg: Registros[] = [];
  ListaValores: number[] = [];
  ListaFech: string[] = [];
  ultimoValor: number = 0;
  titulito!: string;
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  //crear metodo faker y auxiliar
  aux !: Registros;
  faker() {
    var aux = {
      SensorID: 5,
      Sensor: 'prueba',
      Unidad: 'sensor desactivado',
      Valor: 65,
      Fecha: "2022 Apr 20 09:53:03"
    }
    this.ListaReg.push(aux)

    aux = {
      SensorID: 5,
      Sensor: 'prueba',
      Unidad: 'sensor desactivado',
      Valor: 70,
      Fecha: "2022 Apr 20 09:54:03"
    }
    this.ListaReg.push(aux)

    aux = {
      SensorID: 5,
      Sensor: 'prueba',
      Unidad: 'sensor desactivado',
      Valor: 3,
      Fecha: "2022 Apr 20 09:55:03"
    }
    this.ListaReg.push(aux)

    aux = {
      SensorID: 5,
      Sensor: 'prueba',
      Unidad: 'sensor desactivado',
      Valor: 28,
      Fecha: "2022 Apr 20 09:56:03"
    }
    this.ListaReg.push(aux)

    aux = {
      SensorID: 5,
      Sensor: 'prueba',
      Unidad: 'sensor desactivado',
      Valor: 10,
      Fecha: "2022 Apr 20 09:57:03"
    }
    this.ListaReg.push(aux)

    aux = {
      SensorID: 5,
      Sensor: 'prueba',
      Unidad: 'sensor desactivado',
      Valor: 26,
      Fecha: "2022 Apr 20 09:58:03"
    }
    this.ListaReg.push(aux)

    aux = {
      SensorID: 5,
      Sensor: 'prueba',
      Unidad: 'sensor desactivado',
      Valor: 55,
      Fecha: "2022 Apr 20 09:59:03"
    }
    this.ListaReg.push(aux)

    aux = {
      SensorID: 5,
      Sensor: 'prueba',
      Unidad: 'sensor desactivado',
      Valor: 80,
      Fecha: "2022 Apr 20 10:00:03"
    }
    this.ListaReg.push(aux)

    aux = {
      SensorID: 5,
      Sensor: 'prueba',
      Unidad: 'sensor desactivado',
      Valor: 41,
      Fecha: "2022 Apr 20 10:01:03"
    }
    this.ListaReg.push(aux)

    aux = {
      SensorID: 5,
      Sensor: 'prueba',
      Unidad: 'sensor desactivado',
      Valor: 90,
      Fecha: "2022 Apr 20 10:02:03"
    }
    this.ListaReg.push(aux)
  }

  llenarVal() {
    this.ListaValores = [];
    this.ListaReg.forEach(i => {
      this.ListaValores.push(i.Valor)
    });
  }
  llenarFecha() {
    this.ListaFech = []
    this.ListaReg.forEach(i => {
      //el 4 es el limit, porque ya esta estandarizado en el facker, y el 3 es la posicion del arreglo
      var aux = i.Fecha.split(" ", 4)[3]
      this.ListaFech.push(aux)
    })
  }
  regresarValor() {
    this.ultimoValor = this.ListaValores[this.ListaValores.length - 1];
    this.titulito = this.ListaReg[0].Sensor
  }

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

  }
  /* new Chart(this.ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          label: this.titulito = this.ListaReg[0].Sensor,
          data: this.ListaValores,
          pointHoverBackgroundColor: "#210B61",
          backgroundColor: "#04B4AE",
          borderColor: "#8A0808",
          fill: true,
        }],
      labels: this.ListaFech
    },
  }); */
}

