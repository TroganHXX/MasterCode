import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'things',
    loadChildren: () => import('./things/things.module').then( m => m.ThingsPageModule)
  },
  {
    path: 'destination',
    loadChildren: () => import('./destination/destination.module').then( m => m.DestinationPageModule)
    },
    {
        path: 'photo',
        loadChildren: () => import('./photo/photo.module').then(m => m.PhotoPageModule)
    },
    {
        path: 'video',
        loadChildren: () => import('./video/video.module').then(m => m.VideoPageModule)
    },
    {
        path: 'social',
        loadChildren: () => import('./social/social.module').then(m => m.SocialPageModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
    },
    {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then(m => m.SettingPageModule)
    },
    
  {
    path: 'photo',
    loadChildren: () => import('./photo/photo.module').then( m => m.PhotoPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./social/social.module').then( m => m.SocialPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'profiles',
    loadChildren: () => import('./profiles/profiles.module').then( m => m.ProfilesPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'nearby',
    loadChildren: () => import('./nearby/nearby.module').then( m => m.NearbyPageModule)
  },
 
 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},  {
    path: 'day1',
    loadChildren: () => import('./day1/day1.module').then( m => m.Day1PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
