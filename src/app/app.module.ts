import { ModalCertificadoComponent } from './../components/modal-certificado/modal-certificado.component';
import { CardCertificadosComponent } from './../components/card-certificados/card-certificados.component';
import { FooterComponent } from './../components/footer/footer.component';
import { CardAcademmicoComponent } from './../components/card-academmico/card-academmico.component';
import { CardExperienciaComponent } from './../components/card-experiencia/card-experiencia.component';
import { PortfolioComponent } from './../pages/portfolio/portfolio.component';
import { NavBarComponent } from './../components/navBar/navBar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculoComponent } from 'src/pages/curriculo/curriculo.component';
import { CardPerfilComponent } from 'src/components/card-perfil/card-perfil.component';
import { CardSobreComponent } from 'src/components/card-sobre/card-sobre.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PortfolioComponent,
    CurriculoComponent,
    CardPerfilComponent,
    CardSobreComponent,
    CardExperienciaComponent,
    CardAcademmicoComponent,
    FooterComponent,
    CardCertificadosComponent,
    ModalCertificadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
