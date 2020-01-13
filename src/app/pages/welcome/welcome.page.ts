import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomePage implements OnInit {

  showSkip = true;
  @ViewChild(IonSlides, {static: false}) slides: IonSlides;
  constructor(private localStorageService:LocalStorageService, private router:Router) { }

  ngOnInit() {
  }
  onSlideWillChange(event) {
    console.log(event);
    this.slides.isEnd().then((end) => {
      this.showSkip = !end;
    });
  }

  onSkip(){
    this.slides.slideTo(3, 500);
  }

  // ionViewWillEnter() {
  //   let appConfig: any = this.localStorageService.get('App', {
  //     hasRun: false,
  //     version: '1.0.0'
  //   });
  //   if ( appConfig.hasRun === false ) {
  //     appConfig.hasRun = true;
  //     this.localStorageService.set('App', appConfig);
  //   } else {
  //     this.router.navigateByUrl('\home');
  //   }
  // }
}
