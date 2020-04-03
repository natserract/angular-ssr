
export interface Post {
    source: string;
    title: string;
    published_date: string;
    abstract: string;
    multimedia: PostMultimedia[];
}


export interface PostMultimedia {
    url: string;
    format: string;
}
