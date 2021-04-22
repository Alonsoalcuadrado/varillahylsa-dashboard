import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styles: [
  ]
})
export class FullComponent implements OnInit {

  public showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideShowMenu(event: boolean) {
    this.showMenu = event
  }

}
