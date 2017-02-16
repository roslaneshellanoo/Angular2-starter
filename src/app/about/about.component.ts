import {Component, OnInit} from '@angular/core';


import {ApiService} from '../shared/api.service'
import {WikipediaService} from '../shared/wikipedia.service'


@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],

})
export class AboutComponent implements OnInit {

  constructor(public apiService: ApiService,
              public wikipediaService: WikipediaService) {
    // Do stuff
  }


  //variable to hold boolean value to style1
  isClassVisible: false;
  isLoading = false;


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
        this.isLoading = false;
      }
    );
  }


  ngOnInit() {
    console.log('Hello About');
  }

}
