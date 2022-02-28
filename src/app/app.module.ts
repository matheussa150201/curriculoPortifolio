import { ModalCertificadoComponent } from './../components/modal-certificado/modal-certificado.component';
import { CardCertificadosComponent } from './../components/card-certificados/card-certificados.component';
import { FooterComponent } from './../components/footer/footer.component';
import { CardAcademmicoComponent } from './../components/card-academmico/card-academmico.component';
import { CardExperienciaComponent } from './../components/card-experiencia/card-experiencia.component';
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
import { CardPerfilComponent } from 'src/components/card-perfil/card-perfil.component';
import { CardSobreComponent } from 'src/components/card-sobre/card-sobre.component';

import { MatInputModule } from '@angular/material/input';

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
    ModalCertificadoComponent,
    HomeComponent,
    ServicosComponent,
    PortfolioCompComponent,
    ContatoComponent,
    NavBarFlutuanteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
