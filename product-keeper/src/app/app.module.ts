import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './admin/navigation/navigation.module';
import { NavigationRoutingModule } from './admin/navigation/navigation-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
