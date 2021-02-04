import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ItemsService} from "../items.service";


@Component({
  selector: 'app-nearbydestinations',
  templateUrl: './nearbydestinations.component.html',
  styleUrls: ['./nearbydestinations.component.css']
})

export class NearbydestinationsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private itemsService: ItemsService) { }

items:any;
latitude:number;
longitude:number;
distances: any[]=[];
distancessliced: any[]=[];
numberofresults:number;
location:string;


  ngOnInit(): void {
    this.getAllItems();
    this.getLocation();
    this.numberofresults=4;
  }

  submitForm= () =>{


    if(this.location){
this.distances=[]
this.distancessliced=[]
        fetch(`https://us1.locationiq.com/v1/search.php?key=pk.f0df16ada8a560bbdd0a90118f1291fe&q=${this.location}&format=json`)
        .then(response => response.json())
      .then(data => {
        console.log(data[0])
    this.latitude=parseFloat(data[0].lat)
    this.longitude=parseFloat(data[0].lon)

    this.getAllItems()
      })
    };

    this.distancessliced=this.distances.slice(0,this.numberofresults)

}


  showPosition= (position) => {

  this.latitude=position.coords.latitude
  this.longitude=position.coords.longitude
}


  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition)
    }
  }


finddistances= (item) => {

  var distance=Math.sqrt(Math.pow((Math.abs(item.latitude*110.574)-Math.abs(this.latitude*110.574)),2)+Math.pow((Math.abs(item.longitude*111.320*Math.cos(item.latitude/Math.PI/180))-Math.abs(this.longitude*111.320*Math.cos(this.latitude/Math.PI/180))),2))


this.distances.push({
  distance:distance,
  location:item
})
this.distancessliced.push({
  distance:distance,
  location:item
})
  }

  getAllItems(){
    this.itemsService.getItems().subscribe(items => {
     this.items = items["data"];


this.items.forEach(this.finddistances)

      this.distances.sort(function(a, b) {
      return a.distance-b.distance
      })

      this.distancessliced=this.distances.slice(0,this.numberofresults)



    });
  }

}
