
import { Component, OnInit } from '@angular/core';
import { Post } from '../../core/models';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private titleService: Title,
        private meta: Meta,
    ) { }

    post: Post;

    ngOnInit() {
        // Getting article data by slug
        this.route.data.subscribe(
            (data: { post: { results: Array<Post> } }) => {
                data.post.results.forEach(item => {
                    this.post = item;
                    this.titleService.setTitle(`${item.title} | Black Management`);
                    this.meta.addTags([{
                            name: 'title',
                            content: item.title
                        }, {
                            name: 'description',
                            description: 'The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate'
                        },
                    ]);
                });
            }
        );

    }
}
