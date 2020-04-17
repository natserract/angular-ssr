import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppStateTypes, Post } from './store/types';

import * as Selector from './store/selectors';
import * as Dispatch from './store/actions';
import { Observable } from 'rxjs';
import { PostService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router,
    private store: Store<AppStateTypes>,
    private postService: PostService
  ) {
    this.count$ = this.store.pipe(
      select(Selector.IncrementSelector)
    );
    this.message$ = this.store.pipe(
      select(Selector.SendPayloadSelector)
    );
    this.post$ = this.store.pipe(
      select(Selector.GetAllPostsSelector)
    );
  }

  title$ = 'angular-app';
  isShowingRouteLoadIndicator$: boolean;
  count$: Observable<number>;
  message$: Observable<string>;
  post$: Observable<Post[]>;

  ngOnInit(){
    this.store.dispatch(new Dispatch.IncrementAction());
    this.store.dispatch(new Dispatch.SendPayloadAction({
      message: 'Payload from root'
    }));

    this.router.events.subscribe(
      (event: Event): boolean => {
        if (event instanceof NavigationStart) {
            return  this.isShowingRouteLoadIndicator$ = true;
        } else if (event instanceof NavigationEnd) {
            return this.isShowingRouteLoadIndicator$ = false;
        }
      }
    );
  }
}
