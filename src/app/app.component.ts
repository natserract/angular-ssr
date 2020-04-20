import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppStateTypes } from './store/types';

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
    private store: Store<AppStateTypes>,
  ) {
    this.count$ = this.store.pipe(
      select(Selector.IncrementSelector)
    );
    this.message$ = this.store.pipe(
      select(Selector.SendPayloadSelector)
    );
  }

  title$ = 'angular-app';
  isShowingRouteLoadIndicator$: boolean;
  count$: Observable<number>;
  message$: Observable<string>;

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
