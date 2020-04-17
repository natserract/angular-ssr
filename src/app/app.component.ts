import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as Selector from './store/selectors';
import * as Dispatch from './store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router,
    private store: Store<any>,
  ) {
    this.count$ = this.store.pipe(
      select(Selector.Increment)
    );
  }

  title$ = 'angular-app';
  isShowingRouteLoadIndicator$: boolean;
  count$: Observable<number>;

  ngOnInit(){
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

  increment() {
    this.store.dispatch(new Dispatch.Increment());
  }
}
