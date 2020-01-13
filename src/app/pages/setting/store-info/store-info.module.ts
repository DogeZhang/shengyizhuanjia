import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { StoreInfoPage } from './store-info.page';
import { ZyzModule } from 'src/app/shared/components/zyz.module';

const routes: Routes = [
  {
    path: '',
    component: StoreInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ZyzModule
  ],
  declarations: [StoreInfoPage]
})
export class StoreInfoPageModule {}
