import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AgregarZona } from 'src/app/models/zonas';
import { VarGlobalesService } from 'src/app/services/var-globales.service';
import { ZonasService } from 'src/app/servicios/zonas.service';

@Component({
  selector: 'app-registrarzona',
  templateUrl: './registrarzona.component.html',
  styleUrls: ['./registrarzona.component.css']
})
export class RegistrarzonaComponent implements OnInit {

FormControl!: FormGroup;
zonaAlta!: AgregarZona;


  constructor(private vd:FormBuilder,
    private miServicio:ZonasService,
    private router:Router,
    private variablesGlobales: VarGlobalesService, 
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.FormControl = this.vd.group({
      nombre:["",[Validators.required]],
    })

  }
  setZona():void{
    this.zonaAlta = {
      nombre:this.FormControl.get('nombre')?.value
    }
  }

  registrar(){
    this.setZona();
    if (this.FormControl.valid){

      this.variablesGlobales.isLoading = true;

      this.miServicio.registrarZona(this.zonaAlta).subscribe({
        next: (r) => [
          this.openSnackBar('Zona agregada correctamente', 'OK'),
          this.router.navigate(['/zonas/ver']),
      ],
        error: (e) => [console.error(e), this.variablesGlobales.isLoading = false,
          this.openSnackBar('Error al crear zona', 'OK')],
        complete: () => [console.info('complete'), this.variablesGlobales.isLoading = false]
    })
    }
  }

  openSnackBar(data: string, action:string) {
    this._snackBar.open(data, action);
  }

}
