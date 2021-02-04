import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { DestinationdetailsComponent } from './destinationdetails/destinationdetails.component';
import { NearbydestinationsComponent } from './nearbydestinations/nearbydestinations.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },
  { path: 'additem', loadChildren: () => import('./add-item/add-item.module').then(m => m.AddItemModule) },
  { path: 'item/:id', loadChildren: () => import('./item/item.module').then(m => m.ItemModule) },
  { path: 'details/:id', component: DestinationdetailsComponent  },
  { path: 'nearbylocations', component: NearbydestinationsComponent  },

]



@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
