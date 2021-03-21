import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCityResponse } from './weather.model';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private http: HttpClient) {
    }

    public getWeather(city: string) {
        return this.http.get<ApiCityResponse>(
            'http://api.weatherstack.com/current?access_key=4f2855139082cc4e589840fe0d58656d&query=' + city);
    }
}

