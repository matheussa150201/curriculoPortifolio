import { CurriculoComponent } from './../pages/curriculo/curriculo.component';
import { PortfolioComponent } from './../pages/portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'curriculo', component: CurriculoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
