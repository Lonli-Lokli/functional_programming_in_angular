import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CitySearchInitiated, TemperatureBloc, TemperatureState } from './temperature.bloc';
import { identity } from '@fp/utils';

interface TemperatureForm {
  city?: string;
}
@Component({
  selector: 'fp-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent {
  public state$: Observable<TemperatureState>;
  public form = new FormGroup({
    city: new FormControl(''),
  });

  constructor(private bloc: TemperatureBloc) {
    this.state$ = this.bloc.state$;
  }

  public doSearch() {
    this.bloc.add(new CitySearchInitiated(identity<TemperatureForm>(this.form.value).city))
  }

}
