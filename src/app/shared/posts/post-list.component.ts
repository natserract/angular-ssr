
import { Component, OnInit } from '@angular/core';
import { Post, ApiService, PostService, PostMultimedia } from '../../core';

@Component({
    selector: 'app-post-lists',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
    constructor(
        private postsService: PostService
    ){}

    posts: Post;
    loading = false;

    ngOnInit(){
        this.loading = true;

        return this.postsService.getAllPosts()
        .subscribe(
            data => {
                this.posts = data;
                this.loading = false;
            },
            err => console.log(err)
        );
    }

}
