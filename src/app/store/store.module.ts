import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgModule } from '@angular/core';
import { RootReducer } from './reducers';
import * as Effects from './effects';
import { environment } from 'src/environments/environment';

@NgModule({
    imports: [
        StoreModule.forRoot(RootReducer),
        // EffectsModule.forRoot([
        //     Effects.PostEffects
        // ]),
        StoreDevtoolsModule.instrument({
            maxAge: 30,
            logOnly: environment.production
        })
    ],
})

export class AppStoreModule {}
