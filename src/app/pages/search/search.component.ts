import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TvShowService } from '../../services/tv-show.service';
import { TvShow } from '../../models/tv-show.model';
import { Subject } from 'rxjs/Subject';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tvShows: TvShow[];
  private query = new Subject<string>();
  fetchError = false;

  constructor(
    private tvShowService: TvShowService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const term = params.searchQuery;
      if (term) {
        this.tvShowService.searchTvShows(term).subscribe(result => {
          this.fetchError = !result ? true : false;
          this.tvShows = [];
          if (!this.fetchError) {
            this.tvShows = result.map((res: any) => res.show);
          }
        });
      } else {
        this.tvShows = [];
      }
    });

    this.query.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(400),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
    ).subscribe(query => this.router.navigate(['/search'], { queryParams: { searchQuery: query } }));
  }

  search(updatedQuery: string): void {
    this.query.next(updatedQuery);
  }

}
