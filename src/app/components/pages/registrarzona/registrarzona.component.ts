import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgregarZona } from 'src/app/models/zonas';
import { ZonasService } from 'src/app/servicios/zonas.service';

@Component({
  selector: 'app-registrarzona',
  templateUrl: './registrarzona.component.html',
  styleUrls: ['./registrarzona.component.css']
})
export class RegistrarzonaComponent implements OnInit {

FormControl!: FormGroup;
zonita!: AgregarZona;


  constructor(private vd:FormBuilder,
    private miServicio:ZonasService,
    private route:Router,
    ) { }

  ngOnInit(): void {
    this.FormControl = this.vd.group({
      nombre:["",[Validators.required]],
    })

  }
  setZona():void{
    this.zonita = {
      nombre:this.FormControl.get('nombre')?.value
    }
  }
  registrar(): void{
    this.setZona();
    console.log(this.FormControl.value);
    this.miServicio.registrarZona(this.zonita).subscribe((data:any)=>{
      console.log("ya jala");
      localStorage.setItem("token",data.token);
    },
    error =>{
      console.log(error);
    })
  }

}
