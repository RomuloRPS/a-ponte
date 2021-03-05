import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss']
})
export class PostPage {
  public post: any;

  constructor(public postService: PostService) {
    // get sample data only
    // this.post = postService.getItem(activatedRoute.snapshot.paramMap.get('id'));
    this.post = postService.getItem(0);
  }

  toggleLike(post) {
    // if user liked
    if (post.liked) {
      post.likeCount--;
    } else {
      post.likeCount++;
    }

    post.liked = !post.liked;
  }
}
