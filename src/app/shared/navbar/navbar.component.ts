import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  @Output() showAsideMenu = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    this.showAsideMenu.emit(true);
  }

}
