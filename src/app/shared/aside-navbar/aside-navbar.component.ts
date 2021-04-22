import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside-navbar',
  templateUrl: './aside-navbar.component.html',
  styles: [
  ]
})
export class AsideNavbarComponent implements OnInit {

  public showSubmenu: boolean = false;

  @Output() hideAsideMenu = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  materialsSubmenu(): void {
    this.showSubmenu = !this.showSubmenu
  }

  hideMenu() {
    this.hideAsideMenu.emit(false);
  }

}
