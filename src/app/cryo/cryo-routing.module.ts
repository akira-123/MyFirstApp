import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryoPage } from './cryo.page';

const routes: Routes = [
  {
    path: '',
    component: CryoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryoPageRoutingModule {}
