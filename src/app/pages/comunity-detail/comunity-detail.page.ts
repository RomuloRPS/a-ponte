import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'app-user',
  templateUrl: './comunity-detail.page.html',
  styleUrls: ['./comunity-detail.page.scss']
})
export class ComunityDetailPage {
  public user: any;

  constructor(public activatedRoute: ActivatedRoute, public userService: UserService, public postService: PostService) {
    // get sample data only
    // this.user = userService.getItem(activatedRoute.snapshot.paramMap.get('id'));
    this.user = userService.getItem(0);

    Object.assign(this.user, {
      followers: 199,
      following: 48,
      favorites: 14,
      posts: postService.getAll()
    });
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
