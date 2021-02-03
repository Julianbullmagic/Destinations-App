import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  imports: [
    ItemsRoutingModule,
   CommonModule,
   LeafletModule
  ],
  declarations: [ItemsComponent]
})
export class ItemsModule { }
