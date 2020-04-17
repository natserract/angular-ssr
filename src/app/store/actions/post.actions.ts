
import { Action } from '@ngrx/store';
import * as Types from '../types';

/*
 * For alternative you can use
 * createAction() from @ngx/store
 * but currently we using class for implements the action
*/

export enum SelectPostAction {
    FETCH_REQUEST = '[Post] FETCH_REQUEST',
    FETCH_SUCCESS = '[Post] FETCH_SUCCESS',
    FETCH_ERROR = '[Post] FETCH_ERROR'
}

export class FetchRequest implements Action {
    readonly type = SelectPostAction.FETCH_REQUEST;
}

export class FetchSuccess implements Action {
    readonly type = SelectPostAction.FETCH_SUCCESS;
    constructor(public payload: {
        posts: Types.Post[]
    }){}
}

export class FetchError implements Action {
    readonly type = SelectPostAction.FETCH_ERROR;
    constructor(public payload: {
        message: string
    }){}
}


export type PostActions = FetchRequest | FetchSuccess | FetchError;
