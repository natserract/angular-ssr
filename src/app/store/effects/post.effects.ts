import { Injectable } from '@angular/core';
import { Effect, ofType, createEffect, Actions, } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import * as Action from '../actions';
import { PostService } from '../../core/services';
import { FetchSuccess, FetchRequest } from '../actions';

@Injectable()
export class PostEffects {
    constructor(
        private postService: PostService,
        private actions$: Actions,
    ) { }

    // getPosts$ effect is listening for all dispatched actions
    getPosts$ = createEffect(() => this.actions$.pipe(
        ofType<Action.FetchSuccess>(Action.SelectPostAction.FETCH_SUCCESS),
        (() => this.postService.getAllPosts()
            .pipe(
               map(data => new FetchSuccess({
                    posts: Object.assign(data)
               })),
            )
        )
    ));
}
