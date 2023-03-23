import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {
constructor( private http: HttpClient) {  

} 

   getWeather(location:any){
    return this.http.get(
        'https://api.weatherapi.com/v1/current.json?key=cb2d625f93414bcb85a111921232003&q=' + location +'&aqi=no'
    );
}
}


