import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';
import { IonicModule } from '@ionic/angular';



// 一种函数 能够标记 下方“SharedModule”是哪种类型
// 元素矩 “属性” + “：” <=> “key” “value”
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  providers: [
    LocalStorageService
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]

})
export class SharedModule { }
