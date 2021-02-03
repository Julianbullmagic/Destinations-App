import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../items.service";
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  items: any;

  getAllItems(){
    this.itemsService.getItems().subscribe(items => {
     this.items = items["data"];
      console.log(this.items)
    });
  }

  ngOnInit() {

   this.getAllItems();
  }

}
