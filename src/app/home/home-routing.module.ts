import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children :[{
      path: 'events',
      loadChildren: () => import('../events/events.module').then(m => m.EventsPageModule)
      },
     {
      path: 'tab2',
      loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },{
         path: 'nearby',
         loadChildren: () => import('../nearby/nearby.module').then(m => m.NearbyPageModule)
        },
      {
    path: 'help',
    loadChildren: () => import('../help/help.module').then(m => m.HelpPageModule)
      },
    {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
    },]
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
