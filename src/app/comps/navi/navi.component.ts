import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  
  title:string

  ngOnInit() {
    this.activatedRoute.data.subscribe(x =>{
      this.title = x.title
    })
  }

}
