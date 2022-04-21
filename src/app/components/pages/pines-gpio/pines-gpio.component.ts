import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pines-gpio',
  templateUrl: './pines-gpio.component.html',
  styleUrls: ['./pines-gpio.component.css']
})
export class PinesGPIOComponent implements OnInit {

  pines = [
    {
        "board": 3,
        "BCM": "GPIO 2 (SDA)",
        "Usado": false
    },
    {
        "board": 5,
        "BCM": "GPIO 3 (SCL)",
        "Usado": false
    },
    {
        "board": 7,
        "BCM": "GPIO 4 (GPCLK0)",
        "Usado": false
    },
    {
        "board": 8,
        "BCM": "GPIO 14 (TDX)",
        "Usado": false
    },
    {
        "board": 10,
        "BCM": "GPIO 15 (RXD)",
        "Usado": false
    },
    {
        "board": 11,
        "BCM": "GPIO 17",
        "Usado": false
    },
    {
        "board": 12,
        "BCM": "GPIO 18 (PCM_CLK)",
        "Usado": false
    },
    {
        "board": 13,
        "BCM": "GPIO 27",
        "Usado": false
    },
    {
        "board": 15,
        "BCM": "GPIO 22",
        "Usado": false
    },
    {
        "board": 16,
        "BCM": "GPIO 23",
        "Usado": false
    },
    {
        "board": 18,
        "BCM": "GPIO 24",
        "Usado": false
    },
    {
        "board": 19,
        "BCM": "GPIO 10 (MOSI)",
        "Usado": false
    },
    {
        "board": 21,
        "BCM": "GPIO 9 (MISO)",
        "Usado": false
    },
    {
        "board": 22,
        "BCM": "GPIO 25",
        "Usado": false
    },
    {
        "board": 23,
        "BCM": "GPIO 11 (SCLK)",
        "Usado": false
    },
    {
        "board": 24,
        "BCM": "GPIO 8 (CE0)",
        "Usado": false
    },
    {
        "board": 26,
        "BCM": "GPIO 7 (CE1)",
        "Usado": false
    },
    {
        "board": 27,
        "BCM": "GPIO 0 (ID_SD)",
        "Usado": false
    },
    {
        "board": 28,
        "BCM": "GPIO 1 (ID_SC)",
        "Usado": false
    },
    {
        "board": 29,
        "BCM": "GPIO 5",
        "Usado": false
    },
    {
        "board": 31,
        "BCM": "GPIO 6",
        "Usado": false
    },
    {
        "board": 32,
        "BCM": "GPIO 12 (PWM0)",
        "Usado": false
    },
    {
        "board": 33,
        "BCM": "GPIO 13 (PWM1)",
        "Usado": false
    },
    {
        "board": 35,
        "BCM": "GPIO 19 (PCM_FS)",
        "Usado": false
    },
    {
        "board": 36,
        "BCM": "GPIO 16",
        "Usado": false
    },
    {
        "board": 37,
        "BCM": "GPIO 26",
        "Usado": false
    },
    {
        "board": 38,
        "BCM": "GPIO 20 (PCM_DIN)",
        "Usado": false
    },
    {
        "board": 40,
        "BCM": "GPIO 21 (PCM_DOUT)",
        "Usado": false
    }
]


  constructor() { }

  ngOnInit(): void {
  }

  puertoSeleccionado(board: number){
      this.pines.forEach(element => {
          if (element.board == board){
              alert(element.BCM)
          }
      });
  }

}
