import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { ValidateFormDirective } from './contact/contact.directive';

import { PostRoutingModule } from './post/post-routing.module';
import { PostResolverType01, PostResolverType02 } from './post/post-resolver.service';
import { ExcerptPipe } from './post/post.pipe';
import { FilterPipe } from './search/search.pipe';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        PostRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        PostComponent,
        ExcerptPipe,
        FilterPipe,
        ContactComponent,
        SearchComponent,
        ValidateFormDirective
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        PostResolverType01,
        PostResolverType02
    ]
})

export class ModulesModule {}
