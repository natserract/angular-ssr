import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService, ApiService, LocalStorageService } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ApiService,
        PostService,
        LocalStorageService, {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ],
    declarations: []
})

export class CoreModule {}
