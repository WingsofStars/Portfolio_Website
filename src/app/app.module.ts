import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { TrainingComponent } from './training/training.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EmailJSResponseStatus } from '@emailjs/browser/es/models/EmailJSResponseStatus';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPortfolioComponent,
    ContactMeComponent,
    TrainingComponent,
    PortfolioComponent,
    AboutMeComponent,
    LandingPageComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
