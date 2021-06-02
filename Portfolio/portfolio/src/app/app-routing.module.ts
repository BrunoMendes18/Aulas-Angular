import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ChuckNorrisComponent } from './components/chuck-norris/chuck-norris.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { CorPorParametroComponent } from './components/cor-por-parametro/cor-por-parametro.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { HomeComponent } from './components/home/home.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"calculadora",component:CalculadoraComponent},
  {path:"chucknorris",component:ChuckNorrisComponent},
  {path:"cookies",component:CookiesComponent},
  {path:"corporparametro",component:CorPorParametroComponent},
  {path:"evandref",component:EvAndRefComponent},
  {path:"listadecompras",component:ListaDeComprasComponent},
  {path:"pagina404",component:Pagina404Component},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
