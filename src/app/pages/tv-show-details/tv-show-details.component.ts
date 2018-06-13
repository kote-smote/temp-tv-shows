import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../../services/tv-show.service';
import { ActivatedRoute } from '@angular/router';
import { TvShow } from '../../models/tv-show.model';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit {

  tvShow: TvShow;

  constructor(
    private tvShowService: TvShowService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadShowDetails();
  }

  loadShowDetails() {
    const id = +this.route.snapshot.params.id;
    this.tvShowService.loadTvShow(id).subscribe((result: TvShow) => this.tvShow = result);
  }

}
