import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-counter',
  templateUrl: './users-counter.component.html',
  styleUrls: ['./users-counter.component.css']
})
export class UsersCounterComponent  {

  count:number = 0
  constructor(public users:UsersService) {
    console.log('UsersCounterComponent constructor');
    
    this.users.data.subscribe(users => {
      console.log('UsersCounterComponent did subscribe for users');
      this.count = users.length
    })
  }

}
