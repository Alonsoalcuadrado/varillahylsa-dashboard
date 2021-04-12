import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public images = [{path: 'assets/images/construction.jpg'},
                   {path: 'assets/images/constructionSite.jpg'},
                   {path: 'assets/images/construction.jpg'},
                   {path: 'assets/images/construction.jpg'},
                   {path: 'assets/images/construction.jpg'}];

  constructor() {}

  ngOnInit(): void {
  }

}
