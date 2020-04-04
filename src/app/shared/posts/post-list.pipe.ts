
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'configurl',
})

export class ConfigUrl implements PipeTransform {
    transform(str: string): string {
        const regexOnlySlug = /^(https?:\/\/)*[a-z0-9-]+[a-z0-9-:]+(.[a-z-*]+.)+(\/[a-z0-9-]+)+(\/+)/;
        const regexFull = /^(https?:\/\/)*[a-z0-9-]+(.[a-z-*]+.com)./;

        return str.replace(regexFull, '');
    }
}
