import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, AboutComponent, PostComponent } from './modules';

// Routes config
const routes: Routes = [
  { path: '',  component: HomeComponent,
      data: {
        reuse: true
      }
  },
  { path: 'about', component: AboutComponent},
  { path: 'post/:slug', component: PostComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
