import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentPostsPage } from './recent-posts.page';

const routes: Routes = [
  {
    path: '',
    component: RecentPostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentPostsPageRoutingModule {
}
