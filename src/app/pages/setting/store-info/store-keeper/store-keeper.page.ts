import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-store-keeper',
  templateUrl: './store-keeper.page.html',
  styleUrls: ['./store-keeper.page.scss'],
})
export class StoreKeeperPage implements OnInit {
  userInfo = this.localStorageService.get('userInfo', JSON)
  private storeKeeper = ""

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
  async savestoreKeeper () {
    if(this.storeKeeper == "" || this.storeKeeper == " "){
      let emptyError = await this.alertCtrl.create({
        message: '不可为空'
      })
      emptyError.present()
    } else {
      this.userInfo.storeKeeper = this.storeKeeper
      console.log(this.userInfo)
      this.localStorageService.set("userInfo", this.userInfo)
      let emptyError = await this.alertCtrl.create({
        message: '店铺简称保存为：' + this.storeKeeper,
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
    console.log("storeKeeper: " + this.storeKeeper)
  }
}
