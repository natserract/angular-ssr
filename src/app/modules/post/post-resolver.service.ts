
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post, PostService } from '../../core';

//tslint:disable

@Injectable()
export class PostResolverType01 implements Resolve<Post> {
    constructor(
        private postService: PostService,
        private router: Router 
    ){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        const yearsParams = route.params['years'],
              monthParams = route.params['month'],
              dateParams = route.params['date'],
              categoryParams = route.params['category'],
              titleParams = route.params['title'];

        const url = `https://www.nytimes.com/${yearsParams}/${monthParams}/${dateParams}/${categoryParams}/${titleParams}`;

        return this.postService.getPost(encodeURIComponent(url))
            .pipe(catchError(() => this.router.navigateByUrl('/')));
    }
}


@Injectable()
export class PostResolverType02 implements Resolve<Post> {
    constructor(
        private postService: PostService,
        private router: Router 
    ){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        const yearsParams = route.params['years'],
              monthParams = route.params['month'],
              dateParams = route.params['date'],
              categoryParams = route.params['category'],
              typeParams = route.params['type'],
              titleParams = route.params['title'];

        const url = `https://www.nytimes.com/${yearsParams}/${monthParams}/${dateParams}/${typeParams}/${categoryParams}/${titleParams}`;

        return this.postService.getPost(encodeURIComponent(url))
            .pipe(catchError(() => this.router.navigateByUrl('/')));
    }
}