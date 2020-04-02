import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { HomeComponent, BannerComponent } from '.';

@NgModule({
    imports: [SharedModule],
    declarations: [
        HomeComponent,
        BannerComponent
    ],
})

export class HomeModule {}
