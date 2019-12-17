import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export class BaseService<T> {


  protected dataSubject:BehaviorSubject<T[]> = new BehaviorSubject<T[]>([])
  data:Observable<T[]> = this.dataSubject.asObservable()

  constructor(private http:HttpClient, private api:string) {
    console.log('BaseService ctor start for api of ' + api);
    
    this.api = "https://jsonplaceholder.typicode.com/" + this.api
    this.http.get<T[]>(this.api).subscribe(arr => {
      console.log('data arrived for api of ' + api);

      //add items from ls
      let dynamicItems:[] = localStorage[this.api] ? JSON.parse(localStorage[this.api]) : [];
      if (dynamicItems.length > 0) {
        arr = arr.concat(dynamicItems)
      }
      
      this.dataSubject.next(arr)
    })
  }

  addNewItem(item:T){
    let dynamicItems = localStorage[this.api] ? 
      JSON.parse(localStorage[this.api]) : [];

    let AllItems = this.dataSubject.value

    if (AllItems[0]['id']) {
      let lastId = Math.max.apply(Math, AllItems.map(__item => __item['id']))
      item['id'] = ++lastId;
    }

    dynamicItems.push(item)
    localStorage[this.api] = JSON.stringify(dynamicItems)

    AllItems.push(item)
    this.dataSubject.next(AllItems)
  }
  
}
