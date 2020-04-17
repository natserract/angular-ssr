
import { createSelector } from '@ngrx/store';
import * as Types from '../types';

const SelectCountState = (State: Types.AppStateTypes) => State.countState;

export const IncrementSelector = createSelector(
    SelectCountState,
    (State: Types.CountStateTypes) => State.count
);

export const DecrementSelector = createSelector(
    SelectCountState,
    (State: Types.CountStateTypes) => State.count
);

export const SendPayloadSelector = createSelector(
    SelectCountState,
    (State: Types.CountStateTypes) => State.message
);
