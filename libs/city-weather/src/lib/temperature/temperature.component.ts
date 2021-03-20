import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'fp-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent {

  

  public form = new FormGroup({
    city: new FormControl(''),
  });

  public doSearch() {
    this.form.value
  }

}
