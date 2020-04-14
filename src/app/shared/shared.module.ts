import { PostListComponent, ConfigUrlPipe } from './posts';
import { ContainerComponent } from './container';
import { ButtonComponent } from './buttons';
import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        ButtonComponent,
        ContainerComponent,
        PostListComponent,
        ConfigUrlPipe,
        LoaderComponent
    ],
    exports: [
        ButtonComponent,
        ContainerComponent,
        PostListComponent,
        LoaderComponent,
        ConfigUrlPipe
    ]
})

export class SharedModule {}

