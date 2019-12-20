import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class SaleService {
    //今日 七日 本月
    sales: Array<{title: string, content: string, previous: number, current: number}>;

    getSale(): Array<{title: string, content: string, previous: number, current: number}>{
      this.sales = [
        { title : "今日", content : "今日", previous : 0, current: 0},
        { title : "七日", content : "七日", previous : 0, current: 0},
        { title : "本月", content : "本月", previous : 0, current: 0}
      ];
      for(let i of this.sales) {
        i.previous = Math.floor(Math.random() * 1000);
        i.current = Math.floor(Math.random() * 1000);
      }
      return this.sales;
    }
    
  }