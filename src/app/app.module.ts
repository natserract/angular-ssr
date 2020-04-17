import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { AppStoreModule } from './store/store.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-app' }),
    AppRoutingModule,
    SharedModule,
    ModulesModule,
    CoreModule,
    HttpClientModule,
    CommonModule,
    AppStoreModule,
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
