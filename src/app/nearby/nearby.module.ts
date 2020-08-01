import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyPageRoutingModule } from './nearby-routing.module';

import { NearbyPage } from './nearby.page';
import { HereMapComponent } from '../here-map/here-map.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyPageRoutingModule,
    RouterModule.forChild([
      {
          path: '',
          component: NearbyPage
      }
  ])
  ],
  declarations: [NearbyPage,HereMapComponent],
  exports: [HereMapComponent]
})
export class NearbyPageModule {}
