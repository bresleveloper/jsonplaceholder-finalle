import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class UsersService  extends BaseService<User> {

  constructor(__http:HttpClient) { 
    super(__http, "users")
  }

  getFullNameById(id:number):string{
    try {
      return this.dataSubject.value.find(u => u.id == id).name
    } catch (error) {
      console.error('getFullNameById', id);
    }
  }

  getUserNameById(id:number):string{
    return this.dataSubject.value.find(u => u.id == id).username
  }
}
