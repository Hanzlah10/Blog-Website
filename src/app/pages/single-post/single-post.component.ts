import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  singlePostData: any
  similarPosts: any;

  constructor(private route: ActivatedRoute, private postService : PostService) {
    
}

ngOnInit(){
  this.route.params.subscribe((val)=>{
    this.postService.loadPost(val['id']).then((post)=>{
      this.singlePostData = post.data()
      // console.log(this.singlePostData.category.categoryId)
     this.loadSimilar(this.singlePostData?.category?.categoryId)
     this.postService.countViews(val['id'])
    })
  })  
  
}

loadSimilar(catId:any){
  this.postService.loadSimilarPost(catId).subscribe((val)=>{
    this.similarPosts = val
    // console.log(this.similarPosts)
  })

  
    
}

}