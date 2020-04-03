import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HomeComponent, AboutComponent } from './';

@NgModule({
    imports: [SharedModule],
    declarations: [
        HomeComponent,
        AboutComponent,
    ],
})

export class ModulesModule {}
