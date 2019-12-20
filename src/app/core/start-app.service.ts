import { Injectable } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
export const APP_KEY: string = 'App';

@Injectable({
  providedIn: 'root'
})
export class StartAppService {

  constructor(private localStorageService: LocalStorageService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const appConfig: any = this.localStorageService.get(APP_KEY, {
      hasRun: false,
      version: '1.0.0'
    });
    if(appConfig.hasRun === false) {
      // 已经添加了登录功能，所以一下方法不需要
      // appConfig.hasRun = true; 
      // this.localStorageService.set(APP_KEY, appConfig);
      return true;
    } else {
      this.router.navigateByUrl('/home'); //改成”signup“方便调试 原”home“
    }
  }
}
