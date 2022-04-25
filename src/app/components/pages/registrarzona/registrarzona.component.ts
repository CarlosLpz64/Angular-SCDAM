import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrarzona',
  templateUrl: './registrarzona.component.html',
  styleUrls: ['./registrarzona.component.css']
})
export class RegistrarzonaComponent implements OnInit {

FormControl!: FormGroup;


  constructor() { }

  ngOnInit(): void {
  }

}
