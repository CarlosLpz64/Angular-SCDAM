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
import { VerusuariosComponent } from './components/pages/usuarios/verusuarios/verusuarios.component';
import { VerregistrosComponent } from './components/pages/verregistros/verregistros.component';
import { VerzonasComponent } from './components/pages/verzonas/verzonas.component';

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
    VerzonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, //Nesesario para forms
    FormsModule, //Necesario para ngModel
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
