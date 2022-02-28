import { NavBarFlutuanteComponent } from './../components/navBarFlutuante/navBarFlutuante.component';
import { ContatoComponent } from './../components/contato/contato.component';
import { PortfolioCompComponent } from './../components/portfolioComp/portfolioComp.component';
import { ServicosComponent } from './../components/servicos/servicos.component';
import { HomeComponent } from './../components/home/home.component';
import { PortfolioComponent } from './../pages/portfolio/portfolio.component';
import { NavBarComponent } from './../components/navBar/navBar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculoComponent } from 'src/pages/curriculo/curriculo.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PortfolioComponent,
    CurriculoComponent,
    HomeComponent,
    ServicosComponent,
    PortfolioCompComponent,
    ContatoComponent,
    NavBarFlutuanteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
