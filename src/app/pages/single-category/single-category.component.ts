import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {


singleCategoryPost:any
categoryName:any

  constructor(private route:ActivatedRoute,private postService: PostService){
    this.route.params.subscribe((val)=>{
      this.categoryName = val['name']
      // console.log(val)
      this.postService.loadCategoryPost(val['id']).subscribe((Post)=>{
        this.singleCategoryPost = Post
        // console.log(Post)
     

      })
    })
  }


}
