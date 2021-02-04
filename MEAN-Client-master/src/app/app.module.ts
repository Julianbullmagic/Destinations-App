import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { DestinationdetailsComponent } from './destinationdetails/destinationdetails.component';
import { NearbydestinationsComponent } from './nearbydestinations/nearbydestinations.component';



@NgModule({
  declarations: [
    AppComponent,
    DestinationdetailsComponent,
    NearbydestinationsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LeafletModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
