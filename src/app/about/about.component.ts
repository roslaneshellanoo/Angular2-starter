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
  // username = {};


  loadUser() {
    this.apiService.getUser().subscribe(
      data => this.users = data
    );
  }

  ngOnInit() {
    console.log('Hello About');


  }

}
