
import { Component, OnInit } from '@angular/core';
import { Post } from '../../core/models';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-post-detail',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit{
    constructor(
        private route: ActivatedRoute
    ){}

    post: Post;

    ngOnInit() {
        // Getting article data by slug
        this.route.data.subscribe(
            (data: { post: { results: Post[] }}) => {
                data.post.results.forEach(item =>
                    this.post = item
                );
            }
        );

        console.log(`Url: ${this.route.snapshot.params.slug}`);
    }
}
