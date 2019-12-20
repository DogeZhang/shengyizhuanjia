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

  openForgotPassword() {
    console.log("function: openForgotPassword activated!");
  }
  constructor(private toastController: ToastController, private alertCtrl: AlertController) { }

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
    let phoneNumNULL = await this.toastController.create({
      message: '请输入您的手机号码或者邮箱',
      duration: 3000
    });

    if(this.username == "" || this.username == null) {
      phoneNumNULL.present();
      return;
    }
    if(phoneReg.test(this.username)||emailReg.test(this.username)) {
    } else {
      phoneNumWrong.present();
      return;
    }
  }
}
