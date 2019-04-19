import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  ApiServiceService  } from "./api-service.service";
import { QueryBindingDef } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public weatherSearchForm: FormGroup;
  public weatherData:any;
  public weatherDataArray:any;
  public weatherDataToday:any;
  public IsVisible=false;
  constructor(private formBuilder: FormBuilder,private apixuService:  ApiServiceService ) { }
  ShowHide(){
    this.IsVisible=true;
  }
  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });}
    sendToAPIXU(formValues){
      this.apixuService
        .getWeather(formValues.location)
        .subscribe(data => { this.weatherData = data;
          this.weatherDataArray=this.weatherData.forecast.forecastday;
          this.weatherDataToday=this.weatherData.location;
          this.ShowHide();
          console.log(this.weatherDataToday)
         console.log(this.weatherData)
        });
    
  }
  getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }

}