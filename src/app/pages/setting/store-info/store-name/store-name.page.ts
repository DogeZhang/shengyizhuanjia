import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-store-name',
  templateUrl: './store-name.page.html',
  styleUrls: ['./store-name.page.scss'],
})
export class StoreNamePage implements OnInit {
  userInfo = this.localStorageService.get('userInfo', JSON)
  private storeName: string

  constructor(
    private localStorageService: LocalStorageService,
    private alertCtrl: AlertController,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }
  async saveStoreName () {
    
    if(this.storeName == "" || this.storeName == " "){
      let emptyError = await this.alertCtrl.create({
        message: '不可为空'
      })
      emptyError.present()
    } else {
      this.userInfo.shopName = this.storeName
      console.log(this.userInfo)
      this.localStorageService.set("userInfo", this.userInfo)
      let emptyError = await this.alertCtrl.create({
        message: '店铺名称保存为：' + this.storeName,
        buttons: [
          {
            text: '确认',
            handler: (blah) => {
              this.navCtrl.back();
            }
          }
        ]
      })
      emptyError.present()
    }
    console.log("storeName: " + this.storeName)
  }
}
