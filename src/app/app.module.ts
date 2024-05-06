import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Link1Component } from './pages/link1/link1.component';
import { Link2Component } from './pages/link2/link2.component';
import { Link3Component } from './pages/link3/link3.component';
import { ModalPageComponent } from './modal-page/modal-page.component';

@NgModule({
  declarations: [AppComponent, Link1Component, Link2Component, Link3Component,ModalPageComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
