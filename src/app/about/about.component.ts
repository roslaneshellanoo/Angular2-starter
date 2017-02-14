import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service'

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public apiService: ApiService
  ) {
    // Do stuff
  }

  public users;
  public results;
  // username = {};


  loadUser() {
    this.apiService.getUser().subscribe(
      data => this.results = data.results
    );
  }

  ngOnInit() {
    console.log('Hello About');


  }

}
