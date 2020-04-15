
import { createSelector } from '@ngrx/store';
import { PostState, RootReducerTypes } from '../types';

export const selectPosts = (state: RootReducerTypes) => state.postsReducer;

export const getAllPosts = createSelector(
    selectPosts,
    (state: PostState) => state.posts
);
