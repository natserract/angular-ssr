import { Injectable } from '@angular/core';
import { Effect, ofType, createEffect, Actions, } from '@ngrx/effects';
import { map, mergeMap, catchError, concatMap, switchMap, subscribeOn } from 'rxjs/operators';

import * as Action from '../actions';
import { PostService } from '../../core/services';
import { FetchSuccess } from '../actions';
import { Store } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, of, Observable } from 'rxjs';

@Injectable()

export class PostEffects {
    constructor(
        private postService: PostService,
        private actions$: Actions,
    ) { }

    @Effect()
    getPosts$ = createEffect(() => this.actions$.pipe(
        ofType<Action.FetchSuccess>(Action.SelectPostAction.FETCH_SUCCESS),
        mergeMap(() => this.postService.getAllPosts()
            .pipe(
                map(data => {
                    return (new FetchSuccess({
                        posts: data
                    }));
                }),
            )
        )
    ));
}
