import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrx part
import { StoreModule } from '@ngrx/store';
import { RootReducer } from './store/reducers';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { CoreModule } from './core';
import { ModulesModule } from './modules';
import { SharedModule } from './shared';
import { HeaderComponent, FooterComponent } from './shared/layout';

import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './route.strategy';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/effects';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-app' }),
    AppRoutingModule,
    SharedModule,
    ModulesModule,
    CoreModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot(RootReducer),
    EffectsModule.forRoot([ PostEffects ])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    Title,
    {
        provide: RouteReuseStrategy,
        useClass: CustomRouteReuseStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
