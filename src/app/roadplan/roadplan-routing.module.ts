import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoadplanPage } from './roadplan.page';

const routes: Routes = [
  {
    path: '',
    component: RoadplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoadplanPageRoutingModule {}
