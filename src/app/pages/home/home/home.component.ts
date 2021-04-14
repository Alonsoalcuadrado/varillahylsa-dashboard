import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public images = [{path: 'assets/images/hero/construction-rods.jpg'},
                   {path: 'assets/images/hero/construction.jpg'},
                   {path: 'assets/images/hero/construction-site.jpg'},
                   {path: 'assets/images/hero/cemex-stock.jpg'},
                   {path: 'assets/images/hero/construction-bricks.jpg'}];

  constructor() {}

  ngOnInit(): void {
  }

}
