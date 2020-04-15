import { combineReducers } from '@ngrx/store';
import { PostReducer } from './post.reducers';

export const RootReducer  = combineReducers({
    posts: PostReducer
});
