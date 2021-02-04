import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  server:string = process.env.PORT||"http://localhost:8000/";

  //get all items
  getItems(){
    //get the items
    return this.httpClient.get(this.server + "items");
  }

  //post an item
  postItem(itemObj: object){
    //headers

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    let obj = {
      name : itemObj["name"],
      image: itemObj["image"],
      description: itemObj["description"],
      amount: itemObj["amount"],
      latitude: itemObj["latitude"],
      longitude: itemObj["longitude"]
    }

    //post an item
    return this.httpClient.post(this.server + "items", JSON.stringify(obj), {headers: headers});
  }

  //get single item
  getItem(itemId: string){
    //get the item using the id
    return this.httpClient.get(this.server + "item/" + itemId);
  }


  //update item
  updateItem(itemId: string, itemObj: object){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    let obj = {
      name : itemObj["name"],
      image: itemObj["image"],
      description: itemObj["description"],
      amount: itemObj["amount"],
      itemId: itemId
    }
    return this.httpClient.put(this.server + "item/" + itemId, JSON.stringify(obj), {headers: headers})
  }


  deleteItem(itemId: string){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    let obj = {
      id: itemId
    }

    return this.httpClient.request("delete",
                                   this.server + "item/" + itemId,
                                   {
                                    headers: headers,
                                    body: JSON.stringify(obj)

                                    })
  }

}
