import { combineReducers, ActionReducerMap } from '@ngrx/store';
import { CountReducer } from './count.reducers';
import * as Types from '../types';

// Combine all reducers
export const RootReducer: ActionReducerMap<Types.RootReducerTypes> = {
    CountState: CountReducer
};
