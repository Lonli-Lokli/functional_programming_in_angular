import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemperatureComponent } from './temperature/temperature.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrefixPipe } from './temperature/pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: TemperatureComponent }])
  ],
  declarations: [TemperatureComponent, PrefixPipe]
})
export class CityWeatherModule {}
