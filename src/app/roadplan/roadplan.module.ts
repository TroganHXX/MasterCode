import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoadplanPageRoutingModule } from './roadplan-routing.module';

import { RoadplanPage } from './roadplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoadplanPageRoutingModule
  ],
  declarations: [RoadplanPage]
})
export class RoadplanPageModule {}
