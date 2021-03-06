import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunityDetailPageRoutingModule } from './comunity-detail-routing.module';

import { ComunityDetailPage } from './comunity-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunityDetailPageRoutingModule
  ],
  declarations: [ComunityDetailPage]
})
export class ComunityDetailPageModule {}
