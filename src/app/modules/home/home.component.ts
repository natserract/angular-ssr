
import {Component} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-dashboard',
    templateUrl: './home.component.html',
})

export class HomeComponent {
    constructor(meta: Meta, title: Title){
        title.setTitle('Home');
        meta.addTags([
            {
                name: 'author',
                content: 'Black Management '
            },
            {
                name: 'keywords',
                content: 'angular, blog-app'
            },
        ]);
    }

    onClick(): void {
        console.log('hello');
    }

}

