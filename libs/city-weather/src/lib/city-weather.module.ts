import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemperatureComponent } from './temperature/temperature.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: TemperatureComponent} 
    ]),
  ],
  declarations: [TemperatureComponent],
})
export class CityWeatherModule {}
