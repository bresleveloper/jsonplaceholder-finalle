import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatModule } from './modules/mat.module';
import { HttpClientModule } from '@angular/common/http';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NaviComponent } from './comps/navi/navi.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './comps/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    HomeComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
