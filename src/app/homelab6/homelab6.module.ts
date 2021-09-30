import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homelab6PageRoutingModule } from './homelab6-routing.module';

import { Homelab6Page } from './homelab6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homelab6PageRoutingModule
  ],
  declarations: [Homelab6Page]
})
export class Homelab6PageModule {}
