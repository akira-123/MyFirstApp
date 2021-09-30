import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Labtest1PageRoutingModule } from './labtest1-routing.module';

import { Labtest1Page } from './labtest1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Labtest1PageRoutingModule
  ],
  declarations: [Labtest1Page]
})
export class Labtest1PageModule {}
