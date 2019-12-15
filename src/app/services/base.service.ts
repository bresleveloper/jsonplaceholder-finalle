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
      this.dataSubject.next(arr)
    })
  }

  addNewItem(item:T){
    let dynamicItems = localStorage[this.api] ? 
      JSON.parse(localStorage[this.api]) : [];

    let apiItems = this.dataSubject.value

    dynamicItems.push(item)
    localStorage[this.api] = JSON.stringify(dynamicItems)

    apiItems.push(item)
    this.dataSubject.next(apiItems)
  }
  
}
