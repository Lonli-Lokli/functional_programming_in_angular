import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'weather',
    loadChildren: () => import('@fp/city-weather').then(m => m.CityWeatherModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/weather'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
