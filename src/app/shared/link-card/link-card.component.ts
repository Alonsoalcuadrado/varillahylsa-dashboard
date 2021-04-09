import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styles: [
  ]
})
export class LinkCardComponent implements OnInit {

  @Input() image: string = '';
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
