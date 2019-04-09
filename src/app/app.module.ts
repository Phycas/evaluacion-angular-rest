import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { UlistaComponent } from './ulista/ulista.component';
import { UdetalleComponent } from './udetalle/udetalle.component';

@NgModule({
  declarations: [
    AppComponent,
    UlistaComponent,
    UdetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
