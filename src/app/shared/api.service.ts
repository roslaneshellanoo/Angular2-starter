import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { contentHeaders } from './headers';

@Injectable()
export class ApiService {
  title = 'Angular 2';

  constructor (
    public http: Http
  ) {}

  getUser() {
    return this.http.get('https://y9hvb1ii28.execute-api.us-east-1.amazonaws.com/dev/search/tracks?token=ihateyousomuchrightnow&q=2pac')
      .map( (res:Response) => res.json());
       // .map(response => response.json().data);

  }
}




export class ApiService2 {

  constructor(public http: Http) {
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
