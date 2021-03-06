import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunityDetailPage } from './comunity-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ComunityDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunityDetailPageRoutingModule {}
