import { Injectable } from '@angular/core';
import { Effect, ofType, createEffect, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom, mergeMap, tap } from 'rxjs/operators';

import { Post, PostState, PostActionType } from '../types';
import {
    FetchError,
    FetchRequest,
    FetchSuccess,
} from '../actions';

import { PostService } from '../../core/services';

@Injectable()
export class PostEffects {
    constructor(
        private postService: PostService,
        private actions: Actions,
    ){}

    @Effect()
    getPosts$ = createEffect(() => this.actions.pipe(
        ofType<FetchSuccess>(PostActionType.FETCH_SUCCESS),
        mergeMap(() => this.postService.getAllPosts()
            .pipe(
                map(posts => ({
                    type: PostActionType.FETCH_SUCCESS,
                    payload: posts
                })),
            )
        )
    ));
}
