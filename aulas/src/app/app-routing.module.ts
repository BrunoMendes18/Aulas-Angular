import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { HomeComponent } from './home/home.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component';
import { FichaAnimalComponent } from './ficha-animal/ficha-animal.component';
import { EscolherAnimalComponent } from './escolher-animal/escolher-animal.component';
import { Page404Component } from './page404/page404.component';
import { ListaDeComprasComponent } from './lista-de-compras/lista-de-compras.component';
import { ChuckComponent } from './chuck/chuck.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"calculadora",component:CalculadoraComponent},
  {path:"readMeGen",component:ReadMeGeneratorComponent},
  {path:"experiments",component:ExperimentsComponent},
  {path:"evAndRef",component:EvAndRefComponent},
  {path:"fichaAnimal",component:FichaAnimalComponent},
  {path:"escolherAnimal",component:EscolherAnimalComponent},
  {path:"notFound",component:Page404Component},
  {path:"listaCompras",component:ListaDeComprasComponent},
  {path:"chuck",component:ChuckComponent},
  {path:"**",redirectTo:"notFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
