import { Component, OnInit } from '@angular/core';
import { GAMES } from '../db-data'
import {ContentCategoryComponent} from './content-category/content-category.component';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient)
  {

  }

  ngOnInit() {
    // this.http.get('api/games/').subscribe(
    //   val => console.log(val)
    // );
  }

  games = GAMES;

}
