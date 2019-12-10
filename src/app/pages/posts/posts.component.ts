import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  usersArrived:boolean = false
  constructor(public posts:PostsService, public users:UsersService) {
    this.users.data.subscribe(users => {
      if (users && users.length > 0) {
        this.usersArrived = true
      }
    })
  }

  ngOnInit() {
  }

}
