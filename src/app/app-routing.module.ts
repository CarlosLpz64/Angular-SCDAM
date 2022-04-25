import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaSensorComponent } from './components/pages/alta-sensor/alta-sensor.component';
import { GraficaComponent } from './components/pages/grafica/grafica.component';
import { PinesGPIOComponent } from './components/pages/pines-gpio/pines-gpio.component';
import { RegistrarzonaComponent } from './components/pages/registrarzona/registrarzona.component';
import { VerusuariosComponent } from './components/pages/usuarios/verusuarios/verusuarios.component';
import { VerregistrosComponent } from './components/pages/verregistros/verregistros.component';
import { VerzonasComponent } from './components/pages/verzonas/verzonas.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  //AUTH
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  //HOME
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  //PINES
  {path: 'pines/ver', component: PinesGPIOComponent, canActivate:[AuthGuard]},
  //REGISTROS
  {path: 'registros/grafica', component: GraficaComponent, canActivate:[AuthGuard]},
  {path: 'registros/ver', component:VerregistrosComponent, canActivate:[AuthGuard]},
  //USUARIOS
  {path: 'usuarios/ver',component: VerusuariosComponent, canActivate:[AuthGuard]},
  //ZONAS
  {path: 'zonas/ver',component:VerzonasComponent, canActivate:[AuthGuard]},
  {path: 'zonas/crear', component:RegistrarzonaComponent, canActivate:[AuthGuard]},
  //SENSORES
  {path: 'sensores/crear', component:AltaSensorComponent, canActivate:[AuthGuard]},
  
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
