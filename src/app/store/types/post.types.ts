

/*
 * Handling global state types in store/types directory
 * Just for global state
*/

export interface PostStateTypes {
    posts: Post[];
    pending: boolean;
    error: string;
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
