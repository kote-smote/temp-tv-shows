import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from '../pages/search/search.component';
import { TvShowDetailsComponent } from '../pages/tv-show-details/tv-show-details.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'show/:id/:name', component: TvShowDetailsComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
