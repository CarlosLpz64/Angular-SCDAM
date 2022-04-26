import { Component, OnInit } from '@angular/core';
import { Pin } from 'src/app/models/pin';
import { PinesService } from 'src/app/services/pines.service';

@Component({
  selector: 'app-pines-gpio',
  templateUrl: './pines-gpio.component.html',
  styleUrls: ['./pines-gpio.component.css']
})
export class PinesGPIOComponent implements OnInit {

  pines:Pin[] = [
    {
        "board": 3,
        "BCM": "GPIO 2 (SDA)",
        "Usado": true
    },
    {
        "board": 5,
        "BCM": "GPIO 3 (SCL)",
        "Usado": true
    },
    {
        "board": 7,
        "BCM": "GPIO 4 (GPCLK0)",
        "Usado": true
    },
    {
        "board": 8,
        "BCM": "GPIO 14 (TDX)",
        "Usado": true
    },
    {
        "board": 10,
        "BCM": "GPIO 15 (RXD)",
        "Usado": true
    },
    {
        "board": 11,
        "BCM": "GPIO 17",
        "Usado": true
    },
    {
        "board": 12,
        "BCM": "GPIO 18 (PCM_CLK)",
        "Usado": true
    },
    {
        "board": 13,
        "BCM": "GPIO 27",
        "Usado": true
    },
    {
        "board": 15,
        "BCM": "GPIO 22",
        "Usado": true
    },
    {
        "board": 16,
        "BCM": "GPIO 23",
        "Usado": true
    },
    {
        "board": 18,
        "BCM": "GPIO 24",
        "Usado": true
    },
    {
        "board": 19,
        "BCM": "GPIO 10 (MOSI)",
        "Usado": true
    },
    {
        "board": 21,
        "BCM": "GPIO 9 (MISO)",
        "Usado": true
    },
    {
        "board": 22,
        "BCM": "GPIO 25",
        "Usado": true
    },
    {
        "board": 23,
        "BCM": "GPIO 11 (SCLK)",
        "Usado": true
    },
    {
        "board": 24,
        "BCM": "GPIO 8 (CE0)",
        "Usado": true
    },
    {
        "board": 26,
        "BCM": "GPIO 7 (CE1)",
        "Usado": true
    },
    {
        "board": 27,
        "BCM": "GPIO 0 (ID_SD)",
        "Usado": true
    },
    {
        "board": 28,
        "BCM": "GPIO 1 (ID_SC)",
        "Usado": true
    },
    {
        "board": 29,
        "BCM": "GPIO 5",
        "Usado": true
    },
    {
        "board": 31,
        "BCM": "GPIO 6",
        "Usado": true
    },
    {
        "board": 32,
        "BCM": "GPIO 12 (PWM0)",
        "Usado": true
    },
    {
        "board": 33,
        "BCM": "GPIO 13 (PWM1)",
        "Usado": true
    },
    {
        "board": 35,
        "BCM": "GPIO 19 (PCM_FS)",
        "Usado": true
    },
    {
        "board": 36,
        "BCM": "GPIO 16",
        "Usado": true
    },
    {
        "board": 37,
        "BCM": "GPIO 26",
        "Usado": true
    },
    {
        "board": 38,
        "BCM": "GPIO 20 (PCM_DIN)",
        "Usado": true
    },
    {
        "board": 40,
        "BCM": "GPIO 21 (PCM_DOUT)",
        "Usado": true
    }
]


  constructor(private miServicio:PinesService) { }

  ngOnInit(): void {
      this.cargarInfo()
  }

  puertoSeleccionado(board: number){
      this.pines.forEach(element => {
          if (element.board == board){
              alert("PIN: " + element.board)
          }
      });
  }

  cargarInfo(){
    this.miServicio.index().subscribe({
      next: (r) =>[
        console.log(r.data),
        this.pines = r.data],
        error: (e) => [console.error(e)],
        complete: () => [console.info('complete'),
      ]
    })
    return
   }

}
