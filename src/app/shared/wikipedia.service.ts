import {Injectable} from '@angular/core';
import {Http,Response, URLSearchParams} from '@angular/http';
import { contentHeaders } from './headers';




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
      .get('https://nmm.mmtst.com/search/tracks', { search,headers: contentHeaders} )
      .map( (res:Response) => res.json());
  }


  // .get('https://y9hvb1ii28.execute-api.us-east-1.amazonaws.com/dev/' + path +'/?'+ params, {search:params})

  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          //this.router.navigate(['home']);
          console.log(response)
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  signup(event) {
    event.preventDefault();
    //this.router.navigate(['signup']);
  }




}
