import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { RootReducerTypes, Post } from './store/types';
import { getAllPosts } from './store/selectors';
import { FetchSuccess } from './store/actions';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router,
    private store: Store<RootReducerTypes>,
  ) {
    this.posts$ = store.pipe(select(getAllPosts));
  }

  title = 'angular-app';
  isShowingRouteLoadIndicator: boolean;
  posts$: Observable<Post[]>;

  ngOnInit(){
    this.store.dispatch(new FetchSuccess({
      posts: null
    }));

    this.posts$.subscribe(
      data => console.log('DATA:' + data)
    );

    this.router.events.subscribe(
      (event: Event): boolean => {
        if (event instanceof NavigationStart) {
            return  this.isShowingRouteLoadIndicator = true;
        } else if (event instanceof NavigationEnd) {
            return this.isShowingRouteLoadIndicator = false;
        }
      }
    );
  }
}
