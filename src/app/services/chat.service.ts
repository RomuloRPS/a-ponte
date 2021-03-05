import { Injectable } from '@angular/core';
import { CHATS } from './mock-chats';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chats: any;

  constructor() {
    this.chats = CHATS;
  }

  getAll() {
    return this.chats;
  }

  getItem(id) {
    for (const chat of this.chats) {
      if (chat.id === parseInt(id, 0)) {
        return chat;
      }
    }

    return null;
  }

  remove(item) {
    this.chats.splice(this.chats.indexOf(item), 1);
  }
}
