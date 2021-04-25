import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  public phoneContact: string = '524426808182'
  public whatsappMessage: string = 'Hola, estoy interesado en tus productos, me gustaría más información';

  @Output() showAsideMenu = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    this.showAsideMenu.emit(true);
  }

}
