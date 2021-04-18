import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() route: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRoute() {
    this.router.navigate(['/'+this.route])
  }

}
