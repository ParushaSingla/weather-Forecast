import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayWeatherComponent implements OnInit {
@Input() public weatherData;
  constructor() { }

  ngOnInit() {
  }

}
