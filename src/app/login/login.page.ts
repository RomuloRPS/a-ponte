import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  constructor(public menu: MenuController, private router: Router) {
    // disable menu
    this.menu.swipeGesture(false);
  }

  login() {
    this.menu.swipeGesture(true);
    this.router.navigate(['home']);
  }
}
