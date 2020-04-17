import { ActionReducerMap } from '@ngrx/store';
import { CountReducer } from './count.reducers';
import { PostReducer } from './post.reducers';
import * as Types from '../types';

// Combine all reducers
export const RootReducer: ActionReducerMap<Types.AppStateTypes> = {
    countState: CountReducer,
    postState: PostReducer
};
