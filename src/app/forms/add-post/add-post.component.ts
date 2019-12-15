import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  constructor(private fb:FormBuilder, 
    public users:UsersService,
    public posts:PostsService) { }

  postForm:FormGroup = this.fb.group({
    userId : this.fb.control(''),
    title : this.fb.control(''),
    body : this.fb.control(''),
  })


  AddPost() {
    console.log('AddPost', this.postForm.value);
    //debugger
    //if (this.postForm.valid) {
    this.posts.addNewItem(this.postForm.value)
  }

}
