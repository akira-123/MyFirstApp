import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homelab6Page } from './homelab6.page';

const routes: Routes = [
  {
    path: '',
    component: Homelab6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homelab6PageRoutingModule {}
