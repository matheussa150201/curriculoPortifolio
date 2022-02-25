import { PortfolioComponent } from './../pages/portfolio/portfolio.component';
import { NavBarComponent } from './../components/navBar/navBar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculoComponent } from 'src/pages/curriculo/curriculo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PortfolioComponent,
    CurriculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
