import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

//Imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PinesGPIOComponent } from './components/pages/pines-gpio/pines-gpio.component';
import { GraficaComponent } from './components/pages/grafica/grafica.component';
import { OpcionesNFC, OpcionesRoles, VerusuariosComponent } from './components/pages/usuarios/verusuarios/verusuarios.component';
import { VerregistrosComponent } from './components/pages/verregistros/verregistros.component';
import { VerzonasComponent } from './components/pages/verzonas/verzonas.component';

//MATERIALS
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrarzonaComponent } from './components/pages/registrarzona/registrarzona.component';
import { InterceptorService } from './services/interceptor.service';
import { LoadingScreenComponent } from './components/pages/loading-screen/loading-screen.component';
import { AltaSensorComponent } from './components/pages/alta-sensor/alta-sensor.component';
import { VerSensoresComponent } from './components/pages/ver-sensores/ver-sensores.component';
import { SensorRegistrosComponent } from './components/pages/sensor-registros/sensor-registros.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NotFoundComponent,
    NavBarComponent,
    PinesGPIOComponent,
    GraficaComponent,
    VerusuariosComponent,
    VerregistrosComponent,
    VerzonasComponent,
    RegistrarzonaComponent,
    LoadingScreenComponent,
    AltaSensorComponent,
    OpcionesRoles,
    VerSensoresComponent,
    SensorRegistrosComponent,
    OpcionesNFC
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, //Nesesario para forms
    FormsModule, //Necesario para ngModel
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatMenuModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
