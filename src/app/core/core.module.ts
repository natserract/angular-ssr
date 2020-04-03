import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService, ApiService } from './services';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ApiService,
        PostService
    ],
    declarations: []
})

export class CoreModule {}
