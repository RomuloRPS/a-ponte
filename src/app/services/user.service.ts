import { Injectable } from '@angular/core';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users;

  constructor() {
    this.users = USERS;
  }

  getAll() {
    return this.users;
  }

  getItem(id) {
    for (const user of this.users) {
      if (user.id === parseInt(id, 0)) {
        return user;
      }
    }
    return null;
  }

  remove(item) {
    this.users.splice(this.users.indexOf(item), 1);
  }
}
