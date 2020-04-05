
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { PostResolverType01, PostResolverType02 } from './post-resolver.service';

const routes: Routes = [
    {
        path: ':years/:month/:date/:category/:title',
        component: PostComponent,
        resolve: {
            post: PostResolverType01
        }
    },
    {
        path: ':years/:month/:date/:type/:category/:title',
        component: PostComponent,
        resolve: {
            post: PostResolverType02
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PostRoutingModule { }
