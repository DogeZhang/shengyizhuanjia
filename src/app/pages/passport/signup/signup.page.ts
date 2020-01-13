import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthenticationCodeService } from 'src/app/services/authentication-code.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
// import { accessSync } from 'fs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private slideIndex = 0;
  public CODE = "验证码为：";
  private codeChecked = true;
  codeSend = true;
  passwordChecked = true;
  signup = {
    phone: '',
    email: '',
    shopName: '',
    password: '',
    confirmPassword: '',
    code: ''
  };
  constructor(private authenticationCodeService: AuthenticationCodeService, 
    private localStorageService:LocalStorageService,
    private alertCtrl: AlertController,
    ) { }
  

@ViewChild('signupSlides', {static: false}) signupSlides: IonSlides;
  
  ngOnInit() {
    // this.signupSlides.lockSwipes(true);
  }
  onNext(){
    this.signupSlides.slideNext();
    this.signupSlides.getActiveIndex().then(res => {
      this.slideIndex = res;
    });
  }
  onPrevious() {
    this.signupSlides.slidePrev()
    this.signupSlides.getActiveIndex().then(res => {
      this.slideIndex = res;
    });
  }
  onSignupPhone(form: NgForm) {
    // this.submited = true;
    if (form.valid) {
      // 已通过客户端验证
      this.onNext();
    }
  }
  async sendCode(){
    let c = this.authenticationCodeService.createCode(4)
    this.CODE = "验证码为：" + c + "";
    const alert = await this.alertCtrl.create({
      header: '验证码为：',    
      message: c,
      buttons: ['确认']
    });
    await alert.present();
    // this.code = "sdfsdf";
    this.codeSend = false;
    console.log(this.CODE);
  }
  checkCode(){
    this.codeChecked = this.authenticationCodeService.validate(this.signup.code+"");
    // console.log(this.codeChecked);
    if(this.codeChecked){
      this.onNext();
    }
  }
  onInform(){
    console.log(this.signup.password + "   " + this.signup.confirmPassword);
    if(this.signup.password === this.signup.confirmPassword){
      this.passwordChecked = true;
    } else {
      this.passwordChecked = false;
    }
    if(this.passwordChecked){
      this.onNext();
    }
  }
  finish(){
    this.localStorageService.set("userInfo", this.signup)
  }
}
