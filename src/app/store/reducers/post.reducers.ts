import { ActionReducer } from '@ngrx/store';
import * as Type from '../types';
import * as Action from '../actions';

export const initialState: Type.PostState = {
    posts: [],
    pending: false,
    error: null
};

export const PostReducer: ActionReducer<Type.PostState, Action.PostActions> =
    (state: Type.PostState = initialState, action: Action.PostActions): Type.PostState => {
        switch (action.type) {
            case Action.SelectPostAction.FETCH_REQUEST: {
                return {
                    ...state,
                    pending: true
                };
            }
            case Action.SelectPostAction.FETCH_SUCCESS: {
                return {
                    ...state,
                    pending: false,
                    posts: action.payload.posts
                };
            }
            case Action.SelectPostAction.FETCH_ERROR: {
                return {
                    ...state,
                    pending: false,
                    error: action.payload.message
                };
            }
            default: return state;
        }
};
