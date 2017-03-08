import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {contentHeaders} from '../shared/headers';

import {ApiService} from '../shared/api.service'
import {WikipediaService} from '../shared/wikipedia.service'


@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],

})
export class AboutComponent implements OnInit {

  constructor(

    public apiService: ApiService,
    public wikipediaService: WikipediaService,
    public http: Http
  ) {
    // Do stuff
  }


  //variable to hold boolean value to style1
  isClassVisible: false;
  isLoading = false;
  title = "fdsafsad";

  public users;

  public results;

  loadUser() {
    this.apiService.getUser().subscribe(
      data => this.results = data.results
    );
  }

  items: Array<string>;


  search(term) {
    this.isLoading = true;
    this.wikipediaService.search(term).subscribe(
      items => this.items = items.results,
      (error) => {
        console.log(error)
      },
      () => {

        setTimeout(() => {
          this.isLoading = false;
        }, 500)

      }
    );
  }

  // .get('https://y9hvb1ii28.execute-api.us-east-1.amazonaws.com/dev/' + path +'/?'+ params, {search:params})


  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({username, password});
    this.http.post('https://y9hvb1ii28.execute-api.us-east-1.amazonaws.com/dev/', body, {headers: contentHeaders})
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


  ngOnInit() {
    console.log('Hello About');
  }

}
