import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WallPostsPageRoutingModule } from './wall-posts-routing.module';

import { WallPostsPage } from './wall-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WallPostsPageRoutingModule
  ],
  declarations: [WallPostsPage]
})
export class WallPostsPageModule {
}
