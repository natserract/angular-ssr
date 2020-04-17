/*
    * Selector for consume state
    * Same with useSeleector hooks in react redux
*/

import { createSelector } from '@ngrx/store';
import * as Types from '../types';

const SelectPostState = (State: Types.AppStateTypes) => State.postState;

export const GetAllPostsSelector = createSelector(
    SelectPostState,
    (State: Types.PostStateTypes) => State.posts
);
