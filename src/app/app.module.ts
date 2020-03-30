import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import {StatsCardsModule} from './components/stats-cards/stats-cards.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    StatsCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
