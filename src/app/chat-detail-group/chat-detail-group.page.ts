import { Component, ViewChild } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { IonContent } from '@ionic/angular';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail-group.page.html',
  styleUrls: ['./chat-detail-group.page.scss']
})
export class ChatDetailGroupPage {
  @ViewChild(IonContent) content: IonContent;

  public chat: any;
  public newMessage: any;

  constructor(public chatService: ChatService) {
    // get sample data only
    // this.chat = chatService.getItem(activatedRoute.snapshot.paramMap.get('id'));
    this.chat = chatService.getItem(0);
  }

  // send message
  sendMessage() {
    if (this.newMessage) {
      this.chat.messages.push({
        type: 'sent',
        text: this.newMessage,
        image: '',
        time: 'Agora mesmo'
      });

      // clear input
      this.newMessage = '';

      // scroll to bottom
      setTimeout(() => {
        // scroll to bottom
        this.content.scrollToBottom();
      }, 200);
    }
  }
}
