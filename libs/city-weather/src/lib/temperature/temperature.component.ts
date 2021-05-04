import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { identity } from '@fp/utils';
import { WeatherService } from '@fp/api-weather';
import { CityStationWeather } from '@fp/typings';
import { take } from 'rxjs/operators';

interface SearchForm {
  city?: string;
}

export type asForm<T> = { [K in keyof T]: AbstractControl };

@Component({
  selector: 'fp-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent {
  public searchForm = new FormGroup(identity<asForm<SearchForm>>({
    city: new FormControl('')
  }));
  public weatherForm: FormGroup;
  public stations: CityStationWeather[] = [];
  public station: CityStationWeather | undefined;
  public error: string | undefined;

  constructor(private svc: WeatherService, private formBuilder: FormBuilder) {
    this.weatherForm = this.formBuilder.group(
      identity<asForm<CityStationWeather>>({
        airQualityIndex: this.formBuilder.control(undefined),
        cityName: this.formBuilder.control(undefined),
        cloudCoverage: this.formBuilder.control(undefined),
        countryCode: this.formBuilder.control(undefined),
        datetime: this.formBuilder.control(undefined),
        dewPoint: this.formBuilder.control(undefined),
        directNormalSolarIrradiance: this.formBuilder.control(undefined),
        estimatedSolarRadiation: this.formBuilder.control(undefined),
        feelLikeTemperature: this.formBuilder.control(undefined),
        lastObservationTime: this.formBuilder.control(undefined),
        latitude: this.formBuilder.control(undefined),
        liquidEquivalentPrecipitationRate: this.formBuilder.control(undefined),
        longitude: this.formBuilder.control(undefined),
        partOfDay: this.formBuilder.control(undefined),
        relativeHumidity: this.formBuilder.control(undefined),
        seaLevelPressure: this.formBuilder.control(undefined),
        snowfall: this.formBuilder.control(undefined),
        stateCode: this.formBuilder.control(undefined),
        station: this.formBuilder.control(undefined),
        sunriseTime: this.formBuilder.control(undefined),
        sunset: this.formBuilder.control(undefined),
        temperature: this.formBuilder.control(undefined),
        timezone: this.formBuilder.control(undefined),
        uvIndex: this.formBuilder.control(undefined),
        visibility: this.formBuilder.control(undefined),
        windDirection: this.formBuilder.control(undefined),
        windSpeed: this.formBuilder.control(undefined)
      })
    );
  }

  public doSearch() {
    this.svc
      .getWeather(identity<SearchForm>(this.searchForm.value).city)
      .pipe(take(1))
      .subscribe(stations => stations.mapRight(s => {
        this.stations = s;
        this.error = undefined;
      }).mapLeft(e => (this.error = e.message)));
  }

  public changeStation() {
    this.weatherForm.patchValue(this.station);
  }
}
