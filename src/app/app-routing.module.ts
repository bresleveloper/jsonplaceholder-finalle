import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AddPostComponent } from './forms/add-post/add-post.component';


const routes: Routes = [

  { path: '', component:HomeComponent, data:{title:'Home Page'}},
  { path: 'posts', component:PostsComponent, data:{title:'Posts'}},
  { path: 'add-posts', component:AddPostComponent, data:{title:'Add New Post'}},





    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
