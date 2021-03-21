import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiCityResponse, WeatherService } from '@fp/api-weather';

export class CitySearchInitiated {
  constructor(public cityName: string) {}
}
export interface TemperatureState {
  weather?: ApiCityResponse;
}
export type TemperatureEvent = CitySearchInitiated;

@Injectable()
export class TemperatureBloc {
  public state$: Observable<TemperatureState>;

  private stateSubj: BehaviorSubject<TemperatureState>;
  constructor(private svc: WeatherService) {
    this.stateSubj = new BehaviorSubject<TemperatureState>({});
    this.state$ = this.stateSubj.asObservable();
  }

  public async add(event: TemperatureEvent) {
    const w = await this.svc.getWeather(event.cityName).toPromise();
    this.stateSubj.next({
      weather: w
    })
  }
}
