import { Http } from '@angular/http'
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpotifyService{
    constructor (private _http: Http)
    {

    }
   getArtistBasicData(artist: String): Observable<JSON>
  {
      let i = 0;
      while(i<artist.length)
      {
        artist = artist.replace(' ', '+');
        i++;
      }
      
      console.log(artist);
      const url = 'https://api.spotify.com/v1/search?q=sutagar&type=artist';
      console.log(this._http.get(url).map(res => res.json()));
      return this._http.get(url).map(res => res.json());
  }
}