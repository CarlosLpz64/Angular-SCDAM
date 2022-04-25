import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PinesGPIOComponent } from '../pines-gpio/pines-gpio.component';

@Component({
  selector: 'app-alta-sensor',
  templateUrl: './alta-sensor.component.html',
  styleUrls: ['./alta-sensor.component.css']
})
export class AltaSensorComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.openDialog()
  }

  openDialog() {
    this.dialog.open(PinesGPIOComponent);
  }

}
