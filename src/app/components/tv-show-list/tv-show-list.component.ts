import { TvShowService } from './../../services/tv-show.service';
import { TvShow } from './../../models/tv-show.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent {

  @Input() tvShows: TvShow[];

  constructor() { }
}
