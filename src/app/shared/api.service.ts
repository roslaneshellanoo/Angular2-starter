import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

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
