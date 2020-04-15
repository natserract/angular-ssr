import { ActionReducer } from '@ngrx/store';
import { PostState, PostActionType } from '../types';
import { PostActions } from '../actions';

export const initialState: PostState = {
    posts: [],
    pending: false,
    error: null
};

export const PostReducer: ActionReducer<PostState, PostActions> = (state: PostState = initialState, action: PostActions): PostState => {
    switch (action.type) {
        case PostActionType.FETCH_REQUEST: {
            return {
                ...state,
                pending: true
            };
        }
        case PostActionType.FETCH_SUCCESS: {
            return {
                ...state,
                pending: false,
                posts: action.payload.posts
            };
        }
        case PostActionType.FETCH_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload.message
            };
        }
        default: return state;
    }
};
