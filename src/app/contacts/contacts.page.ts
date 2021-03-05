import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss']
})
export class ContactsPage {
  public contacts: any;

  constructor(public userService: UserService) {
    this.contacts = userService.getAll();
  }
}
