import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButterflyButtonModule } from "magic-button-pochechito/projects/butterfly-button/src/public-api";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButterflyButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
