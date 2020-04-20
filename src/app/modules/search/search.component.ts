
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Title } from '@angular/platform-browser';
import { AppStateTypes, Post } from '../../store/types';
import * as Selector from '../../store/selectors';
import * as Dispatch from '../../store/actions';

@Component({
    selector: 'app-search-filter',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit{
    constructor(
        private metaTitleService: Title,
        private store: Store<AppStateTypes>,
    ) {
        this.posts$ = this.store.pipe(
            select(Selector.GetAllPostsSelector)
        );
    }

    search$: string;
    posts$: Observable<Post[]>;

    ngOnInit() {
        this.metaTitleService.setTitle('Search | Black Management');
    }

}
