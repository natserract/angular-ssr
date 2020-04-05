import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Post } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class PostService {
    constructor(
        private apiService: ApiService
    ) { }

    getAllPosts(): Observable<Post> {
        return this.apiService.get('/svc/news/v3/content/all/all.json?limit=100&api-key=')
            .pipe(map(
                (data: { results: Post }) => data.results
            ));
    }

    getPost(url: string): Observable<Post> {
        return this.apiService.get(`/svc/news/v3/content.json?url=${url}&api-key=`);
    }
}
