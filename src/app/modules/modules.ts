import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';

import { PostRoutingModule } from './post/post-routing.module';

@NgModule({
    imports: [
        SharedModule,
        PostRoutingModule
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        PostComponent
    ],
    providers: []
})

export class ModulesModule {}
