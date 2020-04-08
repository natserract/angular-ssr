import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

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

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-app' }),
    AppRoutingModule,
    SharedModule,
    ModulesModule,
    CoreModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomRouteReuseStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
