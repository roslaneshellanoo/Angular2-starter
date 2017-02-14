import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ApiService {
  title = 'Angular 2';

  constructor (
    public http: Http
  ) {}

  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map( (res:Response) => res.json());
       // .map(response => response.json().data);

  }
}
