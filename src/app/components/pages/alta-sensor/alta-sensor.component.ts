import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Zonas } from 'src/app/models/zonas';
import { PinesService } from 'src/app/services/pines.service';
import { SensorService } from 'src/app/services/sensor.service';
import { VarGlobalesService } from 'src/app/services/var-globales.service';
import { ZonasService } from 'src/app/servicios/zonas.service';
import { PinesGPIOComponent } from '../pines-gpio/pines-gpio.component';

@Component({
  selector: 'app-alta-sensor',
  templateUrl: './alta-sensor.component.html',
  styleUrls: ['./alta-sensor.component.css']
})
export class AltaSensorComponent implements OnInit {

  nombre:string = "Selecciona un sensor";
  nombreClave:string = "";
  zonaNom: string = "Selecciona una zona";
  zonaID: string = "";
  cantPines:number = 0;
  formularioCorrecto:boolean = false;

  pin1:number = 0;
  pin2:number = 0;

  ListaZonas: any[] = [];


  constructor(
    public dialog: MatDialog,
    private miServicio:ZonasService,
    private sensorServicio:SensorService,
    private pinesServicio:PinesService,
    private variablesGlobales: VarGlobalesService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    //this.openDialog()
    this.cargarInfo()
  }

  openDialog() {
    this.dialog.open(PinesGPIOComponent, {width: '80vw'});
  }

  seleccionar(nombre:string, nombreClave:string, cant:number){
    this.nombre = nombre;
    this.nombreClave = nombreClave;
    this.cantPines = cant;
    this.comprobarForm()
  }

  seleccionarZona(nombre:string, id: string){
    this.zonaID = id;
    this.zonaNom = nombre;
    this.comprobarForm()
  }

  comprobarForm(){
    if (this.nombreClave != "" && this.zonaID != ""){
      if (this.cantPines == 1){
        if (this.pin1 !=0){
          this.formularioCorrecto = true;
        }else{
          this.formularioCorrecto = false;
        }
      }else if (this.cantPines == 2){
        if (this.pin1 !=0 && this.pin2 !=0){
          this.formularioCorrecto = true;
        }else{
          this.formularioCorrecto = false;
        }
      }
    }
  }

  cargarInfo(){
    this.miServicio.mostrarZonas().subscribe({
      next: (r) =>[
        console.log(r.data),
        this.ListaZonas = r.data],
        error: (e) => [console.error(e)],
        complete: () => [console.info('complete'),
       console.log(this.ListaZonas)
      ]
      })
    }

    getPines(){
      var aux = []
      if (this.cantPines == 1){
        aux.push(this.pin1)
      }else if (this.cantPines == 2){
        aux.push(this.pin1)
        aux.push(this.pin2)
      }
      return aux;
    }

    usePines(){
      if (this.cantPines == 1){
        this.usePin(this.pin1)
      }else if (this.cantPines == 2){
        this.usePin(this.pin1)
        this.usePin(this.pin2)
      }
    }

    usePin(pin:number){
      const miRequest = {
        'Usado':true
      }
      this.pinesServicio.cambiarPin(miRequest, pin.toString()).subscribe({
        next: (r) => [
        console.log("Respuesta: " + r),
        this.openSnackBar('Sensor creado con éxito', 'OK')
      ],
        error: (e) => [console.error(e)],
        complete: () => [console.info('complete')]
    })
    }

    altaSensor(){
        const miRequest = {
          'nombre':this.nombreClave, 
          'pines':this.getPines(),
          'efecto': [0],
          'zona': this.zonaID
        }
        this.variablesGlobales.isLoading = true;
        console.log(miRequest);
  
        this.sensorServicio.altaSensor(miRequest).subscribe({
          next: (r) => [
          console.log("Respuesta: " + r),
          this.openSnackBar('Sensor creado con éxito', 'OK'),
          this.usePines()
        ],
          error: (e) => [console.error(e), this.variablesGlobales.isLoading = false, this.openSnackBar('Error al crear sensor', 'OK')],
          complete: () => [console.info('complete'), this.variablesGlobales.isLoading = false]
      })
    }

    openSnackBar(data: string, action:string) {
      this._snackBar.open(data, action);
    }
}
