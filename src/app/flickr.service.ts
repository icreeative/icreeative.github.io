import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FlickrService{
    apiKey = "088f85685a2de09a727de7950153ebca";
    searchUrl: string;


    constructor( private _http: Http ){

    }

    searchPhoto( searchText:string ){
        this.searchUrl =  `https://api.flickr.com/services/rest/?method=flickr.photos.search&&api_key=${this.apiKey}&text=${searchText}&format=json&nojsoncallback=1`;
        return this._http.get(this.searchUrl)
            .map( res => res.json());
     }
}