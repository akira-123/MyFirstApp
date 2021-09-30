import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HydroPageRoutingModule } from './hydro-routing.module';

import { HydroPage } from './hydro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HydroPageRoutingModule
  ],
  declarations: [HydroPage]
})
export class HydroPageModule {}
