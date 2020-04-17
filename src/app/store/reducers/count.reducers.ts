
import { ActionReducer } from '@ngrx/store';
import { CountState } from '../types';
import * as Action from '../actions';

export const initialState: CountState = {
    count: 0
};

export const CountReducer: ActionReducer<CountState, Action.CountActions> =
    (state: CountState = initialState, action: Action.CountActions): CountState => {
        switch (action.type) {
            case Action.SelectCountAction.INCREMENT: {
                return {
                    count: state.count + 1
                };
            }
            default: {
                return state;
            }
        }
};
