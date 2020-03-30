import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [SharedModule],
    declarations: [HomeComponent],
})

export class HomeModule {}
