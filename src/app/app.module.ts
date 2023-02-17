import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { TrainingComponent } from './training/training.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPortfolioComponent,
    ContactMeComponent,
    TrainingComponent,
    PortfolioComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }