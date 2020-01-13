import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StoreAbbreviationPage } from './store-abbreviation.page';

const routes: Routes = [
  {
    path: '',
    component: StoreAbbreviationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StoreAbbreviationPage]
})
export class StoreAbbreviationPageModule {}
