import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { DestinationdetailsComponent } from './destinationdetails/destinationdetails.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },
  { path: 'additem', loadChildren: () => import('./add-item/add-item.module').then(m => m.AddItemModule) },
  { path: 'item/:id', loadChildren: () => import('./item/item.module').then(m => m.ItemModule) },
  { path: 'details/:id', component: DestinationdetailsComponent  },

]


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
