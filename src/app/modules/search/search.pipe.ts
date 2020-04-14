import { Pipe, PipeTransform } from '@angular/core';
import { Post} from '../../core/models';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(items: Post[] | null, searchText: string, fieldName: string) {
        if (!items) { return []; }
        if (!searchText) { return null; }
        searchText = searchText.toLowerCase();

        return items.filter(item => {
            if (item && item[fieldName]) {
              return item[fieldName].toLowerCase().includes(searchText);
            }
            return false;
          });
    }
}
