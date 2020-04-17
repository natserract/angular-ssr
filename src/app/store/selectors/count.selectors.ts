
import { createSelector } from '@ngrx/store';
import * as Types from '../types';

export const SelectCountState = (State: Types.RootReducerTypes) => State.CountState;

export const Increment = createSelector(
    SelectCountState,
    (State: Types.CountState) => State.count
);
