import { API_BASE_PATH, API_SHOWS_CHILD, API_SEARCH_SHOWS_CHILD } from './../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TvShow } from '../models/tv-show.model';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';


@Injectable()
export class TvShowService {

  constructor(private http: HttpClient) { }

  public searchTvShows(query: string): Observable<any[]> {
    const apiPath = `${API_BASE_PATH}/${API_SEARCH_SHOWS_CHILD}?q=${query}`;
    return this.http.get<any[]>(apiPath).pipe(
      catchError(this.handleError('searchTvShows', null))
    );
  }

  public loadTvShow(id: number): Observable<TvShow> {
    const apiPath = `${API_BASE_PATH}/${API_SHOWS_CHILD}/${id}?embed[]=episodes&embed[]=cast`;
    return this.http.get<TvShow>(apiPath).pipe(
      catchError(this.handleError('loadTvShow', null))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
