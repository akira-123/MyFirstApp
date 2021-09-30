import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnemoPage } from './anemo.page';

const routes: Routes = [
  {
    path: '',
    component: AnemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnemoPageRoutingModule {}
