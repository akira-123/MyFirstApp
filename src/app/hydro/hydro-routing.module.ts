import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HydroPage } from './hydro.page';

const routes: Routes = [
  {
    path: '',
    component: HydroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HydroPageRoutingModule {}
