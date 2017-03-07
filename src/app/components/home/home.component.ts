import { Component } from '@angular/core';

//Import object Hero
import { Hero } from './../../hero';

//Create Hero object


//Create array with heroes info
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
@Component({
  selector: 'home-component', // componentname
  templateUrl: './home.component.html', // url of view
  styleUrls: ['./home.component.css'] // url component css
})
export class HomeComponent {
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}