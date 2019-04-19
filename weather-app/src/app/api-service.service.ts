import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  getWeather(location){
      return this.http.get(
          'https://api.apixu.com/v1/forecast.json?key=78b24cfacf3c4f8685195838191804&q=' + location+'&days=5'
      );
  }
}
