import { ContainerComponent } from './container';
import { ButtonComponent } from './buttons';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ButtonComponent,
        ContainerComponent
    ],
    exports: [
        ButtonComponent,
        ContainerComponent
    ]
})

export class SharedModule {}

