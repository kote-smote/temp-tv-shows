import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { TvShowService } from '../services/tv-show.service';
import { SearchComponent } from '../pages/search/search.component';
import { TvShowDetailsComponent } from '../pages/tv-show-details/tv-show-details.component';
import {HttpClientModule} from '@angular/common/http';
import { TvShowListComponent } from '../components/tv-show-list/tv-show-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TvShowDetailsComponent,
    TvShowListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TvShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
