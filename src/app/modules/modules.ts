import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { ContactComponent } from './contact/contact.component';

import { PostRoutingModule } from './post/post-routing.module';
import { PostResolverType01, PostResolverType02 } from './post/post-resolver.service';
import { ExcerptPipe } from './post/post.pipe';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        PostRoutingModule
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        PostComponent,
        ExcerptPipe,
        ContactComponent
    ],
    providers: [
        PostResolverType01,
        PostResolverType02
    ]
})

export class ModulesModule {}
