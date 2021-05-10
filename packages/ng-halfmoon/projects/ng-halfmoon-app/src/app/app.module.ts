import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonsComponent} from "./buttons/buttons.component";
import {NgHalfmoonModule} from "ng-halfmoon";

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgHalfmoonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
