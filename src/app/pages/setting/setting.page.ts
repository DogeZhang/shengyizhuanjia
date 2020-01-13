import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
export const APP_KEY: string = 'App';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  private VERSION: string = "1.8.3";

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
  async checkVersion(){
    const alert = await this.alertCtrl.create({
      header: '版本更新',    
      message: '这已经是最新版本',
      buttons: ['确认']
    });
    await alert.present();
  }
  async onLogout() {
    const alert = await this.alertCtrl.create({
      header: '确认退出吗',    
      message: '这会删除账号所有信息',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',   //注意自定义class写在全局
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确定',
          handler: () => { 
            this.localStorageService.set("userInfo", "")
            this.localStorageService.set(APP_KEY, {
              hasRun: false,
              version: '1.5.0'
            })
            this.navCtrl.navigateForward("welcome");
          }
        }
      ]
    });
    await alert.present();
    // this.localStorageService.set("userInfo", "")
    // this.localStorageService.set(APP_KEY, {
    //   hasRun: false,
    //   version: '1.0.0'
    // })
    // this.navCtrl.navigateForward("welcome");
  }
}
