import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss']
})
export class ChatsPage {
  public chats: any;

  constructor(public chatService: ChatService) {
    // get sample data only
    this.chats = chatService.getAll();
  }
}
