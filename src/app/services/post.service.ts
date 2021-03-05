import { Injectable } from '@angular/core';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: any;

  constructor() {
    this.posts = POSTS;
  }

  getAll() {
    return this.posts;
  }

  getItem(id) {
    for (const post of this.posts) {
      if (post.id === parseInt(id, 0)) {
        return post;
      }
    }
    return null;
  }

  remove(item) {
    this.posts.splice(this.posts.indexOf(item), 1);
  }
}
