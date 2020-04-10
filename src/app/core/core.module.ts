import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService, ApiService, LocalStorageService } from './services';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ApiService,
        PostService,
        LocalStorageService
    ],
    declarations: []
})

export class CoreModule {}
