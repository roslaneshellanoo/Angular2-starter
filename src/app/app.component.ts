import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';
import {WikipediaService} from "./shared/wikipedia.service";

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;

  constructor(
    private api: ApiService,
    private wiki: WikipediaService

  ) {
    this.title = this.api.title;
    this.title = this.wiki.title;
  }
}
