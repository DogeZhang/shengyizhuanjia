import { SaleService } from './sale.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  sales: Array<{title: string, content: string, previous: number, current: number}>;

  ngOnInit(): void {
    this.sales = this.saleService.getSale();
  }
  
  constructor(
    private saleService: SaleService
  ) {}

  
  minus(current: number, previous: number): number {
    const result = current - previous;
    if (result > 0) {
      return 1;
    } else if (result === 0) {
      return 0;
    } else {
      return -1;
    }
  }
}
