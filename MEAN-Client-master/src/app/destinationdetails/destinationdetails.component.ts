import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ItemsService} from "../items.service";
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';


@Component({
  selector: 'app-destinationdetails',
  templateUrl: './destinationdetails.component.html',
  styleUrls: ['./destinationdetails.component.css']
})
export class DestinationdetailsComponent implements OnInit {
  mapOptions: MapOptions;
  map:Map;
  latitude:number;
  longitude:number;

  constructor(private activatedRoute: ActivatedRoute, private itemsService: ItemsService,) {
}
  public id: string;
item:object;
idit = this.activatedRoute.snapshot.paramMap.get('id');



  ngOnInit() {
  this.getItem();
  }

  onMapReady(map: Map) {
  this.map = map;
  this.addSampleMarker();
}

  getItem(){
    this.itemsService.getItem(this.idit).subscribe(item => {
    this.item = item["item"];
    this.initializeMapOptions(this.item);
    })
  }



     initializeMapOptions(item) {
      console.log("latlng")
      console.log(item.latitude, item.longitude)
      this.latitude=item.latitude;
      this.longitude=item.longitude;
    this.mapOptions = {
      center: latLng(item.latitude, item.longitude),
      zoom: 12,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    }
  }

  private addSampleMarker() {
    console.log("latitude and longitude")
    console.log(this.latitude)
    console.log(this.longitude)
    const marker = new Marker([this.latitude, this.longitude])
      .setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png'
        }));
    marker.addTo(this.map);
  }

}
