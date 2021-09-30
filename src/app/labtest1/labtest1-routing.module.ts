import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Labtest1Page } from './labtest1.page';

const routes: Routes = [
  {
    path: '',
    component: Labtest1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Labtest1PageRoutingModule {}
