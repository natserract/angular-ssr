

/*
 * Handling global state types in store/types directory
 * Just for global state
*/

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
