import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { AddItemRoutingModule } from './add-item-routing.module';
import { AddItemComponent } from './add-item.component';

//need to import ReactiveForms module here too
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AddItemRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [AddItemComponent]
})
export class AddItemModule { }
