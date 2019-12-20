import{ Injectable } from '@angular/core';
import { AjaxResult } from './ajaxResult';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    shopName: string='';
    phone: string='';
    password: string='';
    email: string='';
    signup(shopName: string, phone: string, password: string, email: string): Promise<AjaxResult> {
      return;
    }
    login(username: string, password: string): boolean {
      return;
    }
  }