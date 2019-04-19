import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-five-days-weather',
  templateUrl: './five-days-weather.component.html',
  styleUrls: ['./five-days-weather.component.css']
})
export class FiveDaysWeatherComponent implements OnInit {
@Input() weatherDataArray;
  constructor() { }

  ngOnInit() {
  }
  getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }

}
