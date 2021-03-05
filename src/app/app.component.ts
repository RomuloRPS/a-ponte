import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Início',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Posts mais recentes',
      url: '/recent-posts',
      icon: 'list'
    },
    {
      title: 'Mensagens',
      url: '/chats',
      icon: 'mail'
    },
    {
      title: 'Notificações',
      url: '/notifications',
      icon: 'notifications'
    },
    {
      title: 'Comunidades',
      url: '/comunidades',
      icon: 'people'
    },
    {
      title: 'Mural',
      url: '/wall-posts',
      icon: 'browsers'
    },
    {
      title: 'Contatos',
      url: '/contacts',
      icon: 'person'
    },
    {
      title: 'Gerenciar Usuários',
      url: '/user-manager',
      icon: 'people'
    },
    {
      title: 'Configurações',
      url: '/setting',
      icon: 'cog'
    },
    {
      title: 'Sair',
      url: '/login',
      icon: 'exit'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }
}
