import { NgModule, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent, AboutComponent, ContactComponent } from './modules';

// Routes config
const routes: Routes = [
  { path: '',  component: HomeComponent,
      data: {
        reuse: true,
      }
  },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'post',  loadChildren: './modules/modules#ModulesModule' },
  { path: '**', redirectTo: '',  pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
