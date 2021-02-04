import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../items.service";

import {FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private itemsService: ItemsService, private router: Router) { }

  name:string;
  description:string;
  amount: number;
  image: string;
latitude:number;
longitude:number;




  public itemsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('',  Validators.required),
    amount: new FormControl('',  Validators.required),
    image: new FormControl('',  Validators.required),
    latitude: new FormControl('',  Validators.required),
    longitude: new FormControl('',  Validators.required),

  });


  //set the values when the form changes
  onFormChanges(values: any){
    this.name = values.name;
    this.amount = values.amount;
    this.description = values.description;
    this.image = values.image;
    this.latitude = values.latitude;
    this.longitude=values.longitude

  }


  addItem(formData: FormData){
    this.itemsService.postItem(formData).subscribe( res => {
      console.log(res);
      this.router.navigate(["/"]);
    });
  }

  ngOnInit() {
    this.itemsForm.valueChanges.subscribe( values => {
      console.log(values);
      this.onFormChanges(values);
    })
  }

}
