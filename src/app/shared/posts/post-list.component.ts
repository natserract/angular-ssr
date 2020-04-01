
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post-lists',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
    constructor(){}

    ngOnInit(){
        console.log('Post Lists Rendered');
    }
}
