
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post, PostService } from '../../core';

//tslint:disable

@Injectable()
export class PostResolver implements Resolve<Post> {
    constructor(
        private postService: PostService,
        private router: Router 
    ){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        return this.postService.getPost(`https://www.nytimes.com/${route.params['slug']}`)
            .pipe(catchError(() => this.router.navigateByUrl('/')));
    }
}
