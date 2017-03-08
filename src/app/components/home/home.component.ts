import { Component, OnInit} from '@angular/core';

//Import object Hero
import { Hero } from './../../models/hero';

//Import Heroes List _heroesService
import { HeroService } from './../../services/hero.service';

//Create Hero object
//File in ./..../hero.ts

//Create array with heroes info
//Using service, import correctly file 'hero.service' and add in 'providers'

@Component({
  selector: 'home-component', // componentname
  templateUrl: './home.component.html', // url of view
  styleUrls: ['./home.component.css'], // url component css
  providers: [HeroService]
})
export class HomeComponent implements OnInit {

    //When load this component, take HeroListService service info in getHeroes() function
    ngOnInit(): void {
      this.getHeroesList();
    }
  
  //Initialize heroes variable to get heroes list array from service
  public heroes : Hero[];

  //To manage select hero info and show in components/detail/detail.component.html
  selectedHero: Hero;

  //After select on item (hero), asign data in "selectHero" variable that Initialize in this class
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //Create constructor to Initialize Inject HeroService
  constructor(private _heroesService: HeroService) {}

  //Call to hero.service.ts file in 'getHeroes()' function
  getHeroesList()
  {
    this._heroesService.getHeroes().then((heroes: Hero[]) => this.heroes = heroes);
  }
}