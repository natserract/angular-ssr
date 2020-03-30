import { ButtonComponent } from './buttons';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ButtonComponent
    ],
    exports: [
        ButtonComponent
    ]
})

export class SharedModule {}

