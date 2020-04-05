
export interface Post {
    source: string;
    title: string;
    published_date: string;
    abstract: string;
    url: string;
    multimedia: PostMultimedia[];
}


export interface PostMultimedia {
    url: string;
    format: string;
}
