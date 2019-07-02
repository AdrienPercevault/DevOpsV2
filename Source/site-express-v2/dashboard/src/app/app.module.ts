import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Unit1Component } from 'src/pages/unit1/unit1.component';
import { Unit2Component } from 'src/pages/unit2/unit2.component';
import { Unit3Component } from 'src/pages/unit3/unit3.component';
import { Unit4Component } from 'src/pages/unit4/unit4.component';
import { Unit5Component } from 'src/pages/unit5/unit5.component';
import { HomeComponent } from 'src/pages/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Unit1Component,
    Unit2Component,
    Unit3Component,
    Unit4Component,
    Unit5Component,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
