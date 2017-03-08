import {Injectable} from '@angular/core';
//Get data from hero.data.ts file
import {HEROES} from "./../data/hero.data";

//@Injectable() specifies class is available to an injector for instantiation and an injector will display an error when trying to instantiate a class that is not marked as @Injectable()

@Injectable()

//HeroListService exposes the getHeroes() method that returns the data
export class HeroService {
   getHeroes() {
      return Promise.resolve(HEROES); // takes values from country.contacts typescript file
   }
}