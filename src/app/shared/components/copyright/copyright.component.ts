import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zyz-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
})
export class CopyrightComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() bottom: string;
  text: string;
  constructor() {
    let year = (new Date()).getFullYear();
    this.text = `2010-${year} 生意专家`;
    this.bottom = '10px';
  }
}
