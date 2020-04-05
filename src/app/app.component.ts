import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-app';
  isShowingRouteLoadIndicator: boolean;

  constructor(private router: Router) {}

  ngOnInit(){
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
