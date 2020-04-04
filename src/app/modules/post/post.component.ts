
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../core/models';
import { PostService } from '../../core/services';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-post-detail',
    templateUrl: './post.component.html'
})

export class PostComponent implements OnInit{
    constructor(
        private postDetail: PostService,
        private route: ActivatedRoute
    ){}

    post: Post;
    loading = false;

    ngOnInit() {
        this.loading = true;
        // tslint:disable
        
        const regex = /^(https?:\/\/)*[a-z0-9-]+[a-z0-9-:]+(.[a-z-*]+.)/;
        const regex2 = /^(https?:\/\/)*[a-z0-9-]+[a-z0-9-:]+(.[a-z-*]+.)+(\/[a-z0-9-]+)+(\/+)/;
        const str = `http://localhost:4200/post/${this.route.snapshot.params.slug}`;

        const t = '2020%2F04%2F03%2Fus%2Ftrump-inspector-general-intelligence-fired.html';
        console.log(t.replace('/\/r/', '/'))
    }
}
