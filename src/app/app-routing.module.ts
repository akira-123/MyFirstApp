import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    path: 'lab4',
    loadChildren: () => import('./lab4/lab4.module').then( m => m.Lab4PageModule)
  },
  {
    path: 'array',
    loadChildren: () => import('./array/array.module').then( m => m.ArrayPageModule)
  },
  {
    path: 'array',
    loadChildren: () => import('./array/array.module').then( m => m.ArrayPageModule)
  },
  {
    path: 'lab5',
    loadChildren: () => import('./lab5/lab5.module').then( m => m.Lab5PageModule)
  },
  {
    path: 'labtest1',
    loadChildren: () => import('./labtest1/labtest1.module').then( m => m.Labtest1PageModule)
  },
  {
    path: 'lab6',
    loadChildren: () => import('./lab6/lab6.module').then( m => m.Lab6PageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'pyro',
    loadChildren: () => import('./pyro/pyro.module').then( m => m.PyroPageModule)
  },
  {
    path: 'hydro',
    loadChildren: () => import('./hydro/hydro.module').then( m => m.HydroPageModule)
  },
  {
    path: 'anemo',
    loadChildren: () => import('./anemo/anemo.module').then( m => m.AnemoPageModule)
  },
  {
    path: 'electro',
    loadChildren: () => import('./electro/electro.module').then( m => m.ElectroPageModule)
  },
  {
    path: 'cryo',
    loadChildren: () => import('./cryo/cryo.module').then( m => m.CryoPageModule)
  },
  {
    path: 'geo',
    loadChildren: () => import('./geo/geo.module').then( m => m.GeoPageModule)
  },
  {
    path: 'lab7',
    loadChildren: () => import('./lab7/lab7.module').then( m => m.Lab7PageModule)
  },
  {
    path: 'programme',
    loadChildren: () => import('./programme/programme.module').then( m => m.ProgrammePageModule)
  },
  {
    path: 'lab8',
    loadChildren: () => import('./lab8/lab8.module').then( m => m.Lab8PageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'view-post',
    loadChildren: () => import('./view-post/view-post.module').then( m => m.ViewPostPageModule)
  },
  {
    path: 'edit-post/:id',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
