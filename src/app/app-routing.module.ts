import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficaComponent } from './components/pages/grafica/grafica.component';
import { PinesGPIOComponent } from './components/pages/pines-gpio/pines-gpio.component';
import { VerusuariosComponent } from './components/pages/usuarios/verusuarios/verusuarios.component';
import { VerregistrosComponent } from './components/pages/verregistros/verregistros.component';
import { VerzonasComponent } from './components/pages/verzonas/verzonas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pines', component: PinesGPIOComponent},
  {path: 'grafica', component: GraficaComponent},
  {path: 'verusuarios',component: VerusuariosComponent},
  {path: 'verregistros', component:VerregistrosComponent},
  {path: 'verzonas',component:VerzonasComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
