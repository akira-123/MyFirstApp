import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyroPage } from './pyro.page';

const routes: Routes = [
  {
    path: '',
    component: PyroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyroPageRoutingModule {}
