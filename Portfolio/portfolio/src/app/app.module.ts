import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { ChuckNorrisComponent } from './components/chuck-norris/chuck-norris.component';
import { CorPorParametroComponent } from './components/cor-por-parametro/cor-por-parametro.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AskChuckServiceComponent } from './services/ask-chuck-service/ask-chuck-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculadoraComponent,
    EvAndRefComponent,
    CookiesComponent,
    ListaDeComprasComponent,
    ChuckNorrisComponent,
    CorPorParametroComponent,
    Pagina404Component,
    NavbarComponent,
    AskChuckServiceComponent
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
