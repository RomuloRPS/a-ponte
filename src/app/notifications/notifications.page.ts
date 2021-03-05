import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss']
})
export class NotificationsPage {
  public notifications: any;

  constructor(public notificationService: NotificationService) {
    this.notifications = notificationService.getAll();
  }
}
