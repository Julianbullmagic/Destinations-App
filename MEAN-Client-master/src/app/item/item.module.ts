import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';

//need to import ReactiveForms module here too
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ItemRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [ItemComponent]
})
export class ItemModule { }
