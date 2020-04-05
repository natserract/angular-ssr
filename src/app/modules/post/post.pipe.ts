
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'excerpt'})

export class ExcerptPipe implements PipeTransform {
    transform(str: string): string {
        return str.substr(0, 30);
    }
}
