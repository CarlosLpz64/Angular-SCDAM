import { Component } from '@angular/core';
import { VarGlobalesService } from './services/var-globales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'integradora';

  constructor(
    public variablesGlobales: VarGlobalesService
    ) { }


}
