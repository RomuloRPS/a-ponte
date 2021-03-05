import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WallPostsPage } from './wall-posts.page';

const routes: Routes = [
  {
    path: '',
    component: WallPostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WallPostsPageRoutingModule {
}
