import { PostListComponent, ConfigUrl } from './posts';
import { ContainerComponent } from './container';
import { ButtonComponent } from './buttons';
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
        ConfigUrl
    ],
    exports: [
        ButtonComponent,
        ContainerComponent,
        PostListComponent
    ]
})

export class SharedModule {}

