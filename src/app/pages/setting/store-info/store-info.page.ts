import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.page.html',
  styleUrls: ['./store-info.page.scss'],
})
export class StoreInfoPage implements OnInit {
  userInfo = this.localStorageService.get('userInfo', JSON);
  constructor(
    private localStorageService: LocalStorageService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  
  goBack(){
    this.navCtrl.back();
  }
}
