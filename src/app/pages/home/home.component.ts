import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isFeaturedArray:any
  latestPost:any

  constructor(private postService: PostService){
    this.postService.loadFeatured().subscribe((val)=>{
      this.isFeaturedArray = val
    })
    this.postService.loadLatest().subscribe((val)=>{
      this.latestPost = val
    })
  }

}
