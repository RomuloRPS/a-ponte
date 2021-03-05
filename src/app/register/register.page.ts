import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  public chat: any;

  constructor(public menu: MenuController) {
    // disable menu
    this.menu.swipeGesture(false);
  }

}
