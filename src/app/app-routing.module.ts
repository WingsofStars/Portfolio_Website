import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';
import { AuxiliumPageComponent } from './auxilium-page/auxilium-page.component';
const routes: Routes = [
  {path: '', component: MainPortfolioComponent},
  {path: 'home', component: MainPortfolioComponent},
  {path: 'auxilium', component: AuxiliumPageComponent},
  {path: '**', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
