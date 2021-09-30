import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyroPageRoutingModule } from './pyro-routing.module';

import { PyroPage } from './pyro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyroPageRoutingModule
  ],
  declarations: [PyroPage]
})
export class PyroPageModule {}
