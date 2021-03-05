import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.page.html',
  styleUrls: ['./user-manager.page.scss']
})
export class UserManagerPage {
  public contacts: any;

  constructor(public userService: UserService) {
    this.contacts = userService.getAll();
  }
}
