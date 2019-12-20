import{ Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class AjaxResult {
    targetUrl: string;
    result: any;
    success: boolean;
    error: {
      message: string;
      details: string;
    };
    unAuthorizedRequest: boolean;
  }