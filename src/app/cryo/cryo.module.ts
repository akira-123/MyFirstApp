import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryoPageRoutingModule } from './cryo-routing.module';

import { CryoPage } from './cryo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryoPageRoutingModule
  ],
  declarations: [CryoPage]
})
export class CryoPageModule {}
