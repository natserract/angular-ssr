
import { Action } from '@ngrx/store';
import { Post } from 'src/app/core';
import { PostActionType } from '../types';

/*
 * For alternative you can use
 * createAction() from @ngx/store
 * but currently we using class for implements the action
*/

export class FetchRequest implements Action {
    readonly type = PostActionType.FETCH_REQUEST;
}

export class FetchSuccess implements Action {
    readonly type = PostActionType.FETCH_SUCCESS;
    constructor(public payload: {
        posts: Post[]
    }){}
}

export class FetchError implements Action {
    readonly type = PostActionType.FETCH_ERROR;
    constructor(public payload: {
        message: string
    }){}
}


export type PostActions = FetchRequest | FetchSuccess | FetchError;
