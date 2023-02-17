import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';
const routes: Routes = [
  {path: '', component: MainPortfolioComponent},
  {path: 'home', component: MainPortfolioComponent},
  {path: '**', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
