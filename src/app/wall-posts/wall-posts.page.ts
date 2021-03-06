import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public postService: PostService, private router: Router) {
    // get sample data only
    this.posts = postService.getAll();
  }

  toCommunity() {
    this.router.navigate(['comunity-detail']);
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
