import {Injectable} from '@angular/core';
import {Http,Response, URLSearchParams} from '@angular/http';

@Injectable()


export class WikipediaService {

  title = 'Music Messenger Search';

  constructor(
    //private jsonp: Jsonp,
    public http: Http
  ) {
  }


  search(term: string) {

    let search = new URLSearchParams();
    //search.set('action', 'opensearch');
    search.set('q', term);
    //search.set('format', 'json');
    return this.http
      .get('https://y9hvb1ii28.execute-api.us-east-1.amazonaws.com/dev/search/tracks?token=ihateyousomuchrightnow&', { search })
      .map( (res:Response) => res.json());
  }





}
