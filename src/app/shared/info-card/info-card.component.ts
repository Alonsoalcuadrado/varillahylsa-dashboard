import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styles: [
  ]
})
export class InfoCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() body: string = '';
  @Input() btnText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
