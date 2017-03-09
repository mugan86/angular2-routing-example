import { Http } from '@angular/http'
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core'

@Injectable()
export class SpotifyService{
    constructor (private _http: Http)
    {

    }
    getArtistBasicData(artist)
    {
        artist = artist.replace(' ', '+');
        const url = 'https://api.spotify.com/v1/search?q=sutagar&type=artist';
        return this._http.get(url).map(res => res.json())
    }
}