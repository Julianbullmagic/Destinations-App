import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { DestinationdetailsComponent } from './destinationdetails/destinationdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    DestinationdetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
