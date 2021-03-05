import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentPostsPageRoutingModule } from './recent-posts-routing.module';

import { RecentPostsPage } from './recent-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentPostsPageRoutingModule
  ],
  declarations: [RecentPostsPage]
})
export class RecentPostsPageModule {
}
