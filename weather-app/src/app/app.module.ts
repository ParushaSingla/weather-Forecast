import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  ApiServiceService  } from "./api-service.service";
import { TodayWeatherComponent } from './today-weather/today-weather.component';
import { FiveDaysWeatherComponent } from './five-days-weather/five-days-weather.component';
@NgModule({
  declarations: [
    AppComponent,
   
    TodayWeatherComponent,
    FiveDaysWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [ ApiServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
