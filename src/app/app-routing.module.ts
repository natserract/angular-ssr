import { NgModule, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent, AboutComponent, PostComponent } from './modules';

// Routes config
const routes: Routes = [
  { path: '',  component: HomeComponent, data: { reuse: true } }, // enable routes caching
  { path: 'about', component: AboutComponent},
  { path: 'post',  loadChildren: './modules/modules#ModulesModule' }, // lazyload module
  { path: '**', redirectTo: '',  } // handle any notfound routes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
