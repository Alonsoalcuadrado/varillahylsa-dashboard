import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-navbar',
  templateUrl: './aside-navbar.component.html',
  styles: [
  ]
})
export class AsideNavbarComponent implements OnInit {

  public showSubmenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  materialsSubmenu(): void {
    this.showSubmenu = !this.showSubmenu
  }

}
