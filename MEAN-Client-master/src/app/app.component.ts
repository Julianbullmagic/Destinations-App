import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router){}

  addItem: boolean = true;

  checkUrl(){
    this.router.events.subscribe( x => {
      if(!this.router.url.indexOf("/additem")){
        this.addItem = false;
      }else{
        this.addItem= true;
      }
    })
  }

  ngOnInit(){
    this.checkUrl();
  }

}
