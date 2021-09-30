import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnemoPageRoutingModule } from './anemo-routing.module';

import { AnemoPage } from './anemo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnemoPageRoutingModule
  ],
  declarations: [AnemoPage]
})
export class AnemoPageModule {}
