import { Component, Input } from '@angular/core';

import { Hero } from './../../models/hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  //Get data from click action in home.component.html ngClick action in one item
  @Input()
  hero: Hero;
}
