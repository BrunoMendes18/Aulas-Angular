import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';
import { HomeComponent } from './home/home.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { FormsModule } from '@angular/forms';
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component';
import { Exp2Component } from './exp2/exp2.component';
import { FichaAnimalComponent } from './ficha-animal/ficha-animal.component';
import { EscolherAnimalComponent } from './escolher-animal/escolher-animal.component';
import { CookiesComponent } from './cookies/cookies.component';
import { AnimalReaderComponent } from './ficha-animal/animal-reader/animal-reader.component';
import { Page404Component } from './page404/page404.component';
import { ListaDeComprasComponent } from './lista-de-compras/lista-de-compras.component';
import { ChuckComponent } from './chuck/chuck.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './lista-de-compras/add/add.component';
import { BuyComponent } from './lista-de-compras/buy/buy.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CalculadoraComponent,
    ReadMeGeneratorComponent,
    HomeComponent,
    ExperimentsComponent,
    EvAndRefComponent,
    Exp2Component,
    FichaAnimalComponent,
    EscolherAnimalComponent,
    CookiesComponent,
    AnimalReaderComponent,
    Page404Component,
    ListaDeComprasComponent,
    ChuckComponent,
    AddComponent,
    BuyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
