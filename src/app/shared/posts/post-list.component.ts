
import { Component, OnInit } from '@angular/core';
import { Post, ApiService, PostService, PostMultimedia } from '../../core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-post-lists',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
    constructor(
        private postsService: PostService,
        private router: Router,
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

    decodeString(str: string): string{
        return str.toUpperCase();
    }

    handleClick(str: string) {
        console.log(str);
        return this.router.navigateByUrl(`/post${'/'}${str}`);
    }
}
