import { LocalStorageService } from './../../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string="";
  password: string="";
  userInfo={
    phone: '',
    email: '',
    shopName: '',
    password: '',
    confirmPassword: '',
    code: ''
  };

  openForgotPassword() {
    console.log("function: openForgotPassword activated!");
  }
  constructor(private toastController: ToastController, private alertCtrl: AlertController, private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }
  // async onLogin(form: NgForm) {
  async onLogin() {
    console.log("function: onLogin activated!");
    console.log("username: " + this.username);
    console.log("password: " + this.password);
    // 手机验证
    let phoneReg:RegExp = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,3,5-9]))\d{8}$/
    // 邮箱验证
    let emailReg:RegExp = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/

    let phoneNumWrong = await this.toastController.create({
      message: '手机号或邮箱的格式错误',
      duration: 3000
    });
    let phoneNumNull = await this.toastController.create({
      message: '请输入您的手机号码或者邮箱',
      duration: 3000
    });
    let passwordNull = await this.toastController.create({
      message: '密码不能为空',
      duration: 3000
    })

    if(this.username == "" || this.username == null) {
      phoneNumNull.present();
      return;
    }
    if(phoneReg.test(this.username)||emailReg.test(this.username)) {
    } else {
      phoneNumWrong.present();
      return;
    }
    if(this.password == "" || this.password == null) {
      passwordNull.present();
      return;
    }
    // console.log(this.localStorageService.get('userInfo', JSON));
    this.userInfo = this.localStorageService.get('userInfo', JSON);
    if((this.userInfo.phone == this.username||this.userInfo.email == this.username)&&(this.userInfo.password == this.password)) {
      console.log("验证通过！");
    } else {
      console.log("输入的username或password错误！");
    }
  }
}
