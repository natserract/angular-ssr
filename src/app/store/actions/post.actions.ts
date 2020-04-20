
/*
 * For alternative you can use
 * createAction() from @ngx/store
 * but currently we using class for implements the action
*/

import { Action } from '@ngrx/store';
import { Post } from '../types';

export enum SelectPostAction {
    FETCH_REQUEST = '@@POST FETCH_REQUEST',
    FETCH_SUCCESS = '@@POST FETCH_SUCCESS',
    FETCH_ERROR = '@@POST FETCH_ERROR'
}

export class FetchRequest implements Action {
    readonly type = SelectPostAction.FETCH_REQUEST;
}

export class FetchSuccess implements Action {
    readonly type = SelectPostAction.FETCH_SUCCESS;
    constructor(public payload: {
        posts: Post[]
    }){}
}

export class FetchError implements Action {
    readonly type = SelectPostAction.FETCH_ERROR;
    constructor(public payload: {
        message: string
    }){}
}


export type PostActions = FetchRequest | FetchSuccess | FetchError;
