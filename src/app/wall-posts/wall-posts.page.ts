import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'app-wall-posts',
  templateUrl: './wall-posts.page.html',
  styleUrls: ['./wall-posts.page.scss']
})
export class WallPostsPage {
  public posts: any;

  constructor(public postService: PostService) {
    // get sample data only
    this.posts = postService.getAll();
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
