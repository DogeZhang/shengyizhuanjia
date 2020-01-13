import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  userInfo = this.localStorageService.get('userInfo', JSON)
  private Oldpassword = ""
  private Newpassword1: string
  private Newpassword2: string

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
  async savepassword () {
    if(this.Oldpassword == "" || this.Newpassword1 == " " || this.Newpassword2 == " "){
      let emptyError = await this.alertCtrl.create({
        message: '不可为空'
      })
      emptyError.present()
      return
    }
    if(this.userInfo.password != this.Oldpassword){
      let emptyError = await this.alertCtrl.create({
        message: '密码错误'
      })
      emptyError.present()
      return
    }
    if(this.Newpassword1 != this.Newpassword2){
      let emptyError = await this.alertCtrl.create({
        message: '两次密码不一致'
      })
      emptyError.present()
      return
    }
    if(this.Newpassword1 == this.Newpassword2){
      let emptyError = await this.alertCtrl.create({
        message: '修改成功'
      })
      emptyError.present()
      this.userInfo.password = this.Newpassword1
      this.userInfo.confirmPassword = this.Newpassword2
      console.log(this.userInfo)
      this.localStorageService.set("userInfo", this.userInfo)
    }
  }
}
