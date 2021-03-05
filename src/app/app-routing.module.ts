import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'chats/:id',
    loadChildren: () => import('./chat-detail/chat-detail.module').then(m => m.ChatDetailPageModule)
  },
  {
    path: 'chat-group',
    loadChildren: () => import('./chat-detail-group/chat-detail-group.module').then(m => m.ChatDetailGroupPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then(m => m.ChatsPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'user-manager',
    loadChildren: () => import('./user-manager/user-manager.module').then(m => m.UserManagerPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'posts/:id',
    loadChildren: () => import('./post/post.module').then(m => m.PostPageModule)
  },
  {
    path: 'recent-posts',
    loadChildren: () => import('./recent-posts/recent-posts.module').then(m => m.RecentPostsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingPageModule)
  },
  {
    path: 'users/:id',
    loadChildren: () => import('./user/user.module').then(m => m.UserPageModule)
  },
  {
    path: 'wall-posts',
    loadChildren: () => import('./wall-posts/wall-posts.module').then(m => m.WallPostsPageModule)
  },
  {
    path: 'comunidades',
    loadChildren: () => import('./pages/comunity/comunity.module').then( m => m.ComunityPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
