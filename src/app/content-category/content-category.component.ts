import { Component, Input, OnInit } from '@angular/core';
import { GAMES } from '../../db-data';
import { Games } from '../model/Games';

@Component({
  selector: 'app-content-category',
  templateUrl: './content-category.component.html',
  styleUrls: ['./content-category.component.css']
})
export class ContentCategoryComponent implements OnInit {

  @Input()
  Games: Games;

  constructor() { }

  ngOnInit(): void {

  }

  goToLink(link: string)
  {
    window.open(link, "_blank");
  }

  cardCategory()  {
    if(this.Games.category == 'Indie')
    {
      return 'card-indie';
    }
    else if(this.Games.category == 'Platformer')
    {
      return 'card-platformer';
    }
    else if(this.Games.category == 'Action RPG')
    {
      return 'card-action';
    }
    else
    {
      return '';
    }
  }
}
