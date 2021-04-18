import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styles: [
  ]
})
export class LinkCardComponent implements OnInit {

  @Input() image: string = '';
  @Input() title: string = '';
  @Input() route: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRoute() {
    this.router.navigate(['materiales/'+this.route])
  }

}
