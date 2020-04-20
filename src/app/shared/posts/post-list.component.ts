
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppStateTypes, Post } from '../../store/types';
import * as Selector from '../../store/selectors';
import * as Dispatch from '../../store/actions';

@Component({
    selector: 'app-post-lists',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
    constructor(
        private store: Store<AppStateTypes>,
    ){
        this.post$ = this.store.pipe(
            select(Selector.GetAllPostsSelector)
        );

        this.loading$ = this.store.pipe(
            select(Selector.RequestPostSelector)
        );

        this.store.dispatch(new Dispatch.FetchSuccess({
            posts: []
        }));
    }

    post$: Observable<Post[]>;
    loading$: Observable<boolean>;

    ngOnInit(){
        this.store.dispatch(new Dispatch.FetchRequest());
    }

}
