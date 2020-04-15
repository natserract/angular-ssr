

/*
 * Handling global state types in store/types directory
 * Just for global state
*/

export enum PostActionType {
    FETCH_REQUEST = '[Post] FETCH_REQUEST',
    FETCH_SUCCESS = '[Post] FETCH_SUCCESS',
    FETCH_ERROR = '[Post] FETCH_ERROR'
}

export interface PostState {
    posts: Array<Post>;
    pending: boolean;
    error: string | null;
}

export interface Post {
    source: string;
    title: string;
    published_date: string;
    abstract: string;
    url: string;
    multimedia: Array<PostMultimedia>;
}


interface PostMultimedia {
    url: string;
    format: string;
}
