
import { ActionReducer } from '@ngrx/store';
import { CountStateTypes } from '../types';
import * as Action from '../actions';

export const initialState: CountStateTypes = {
    count: 0,
    message: ''
};

export const CountReducer: ActionReducer<CountStateTypes, Action.CountActions> =
    (state: CountStateTypes = initialState, action: Action.CountActions): CountStateTypes => {
        switch (action.type) {
            case Action.SelectCountAction.INCREMENT: {
                return {
                    ...state,
                    count: state.count + 1
                };
            }
            case Action.SelectCountAction.DECREMENT: {
                return {
                    ...state,
                    count: state.count - 1
                };
            }
            case Action.SelectCountAction.COUNTSENDPAYLOAD: {
                return {
                    ...state,
                    message: action.payload.message
                };
            }
            default: return state;
        }
};
