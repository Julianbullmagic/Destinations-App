import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";


import {ItemsService} from "../items.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private route: ActivatedRoute, private itemsService: ItemsService, private router: Router) { }

  //get the id passed on the url
  itemId = this.route.snapshot.paramMap.get("id");
  item: object;
  name:string;
  description:string;
  amount: number;
  image: string;
  latitude:number;
  longitude:number;


  public updateItemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('',  Validators.required),
    amount: new FormControl('',  Validators.required),
    image: new FormControl('',  Validators.required),
    latitude: new FormControl('',  Validators.required),
    longitude: new FormControl('',  Validators.required),

  });


  updateItem(formData: FormData) {
    let confirmSubmit = confirm("Are you sure you want to update this item?");
    console.log(formData)

    if(confirmSubmit){
      console.log("you clicked yes");

      this.itemsService.updateItem(this.itemId, formData).subscribe( data => {
        console.log(data);
        //refresh the current page
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["item", this.itemId]));
      })

    }else{
      console.log("you clicked NO");
      return false;
    }
  }


  getItem(){
    this.itemsService.getItem(this.itemId).subscribe(item => {
    this.item = item["item"];
      this.updateItemForm.setValue({
        name: item["item"]["name"],
        description: item["item"]["description"],
        amount: item["item"]["amount"],
        image: item["item"]["image"]
      })

    });
  }

  onFormChanges(values: any){
    this.name = values.name;
    this.amount = values.amount;
    this.description = values.description;
    this.image = values.image
  }

  deleteItem(itemId: string){
    this.itemsService.deleteItem(itemId).subscribe(data => {
      console.log(data);
      this.router.navigate(["/"]);
    })
  }


  ngOnInit() {
    this.getItem();

    this.updateItemForm.valueChanges.subscribe( values => {
      console.log(values);
      this.onFormChanges(values);
    })
  }


}
