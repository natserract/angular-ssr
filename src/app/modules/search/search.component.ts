
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-search-filter',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit{
    constructor(
        private post: PostService,
        private metaTitleService: Title
    ) {
        metaTitleService.setTitle('Search | Black Management');
    }

    search: string;
    loading = false;
    posts: any | null = null;

    ngOnInit() {
        this.loading = true;
        return this.post.getAllPosts()
            .subscribe(
                data => {
                    this.posts = data;
                    this.loading = false;
                },
                err => console.error(err)
            );
    }

}
