import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Post } from '../model/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseService<Post> {

  constructor(__http:HttpClient) { 
    super(__http, "posts")
  }
}
