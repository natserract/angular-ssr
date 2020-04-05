
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'configurl'})

export class ConfigUrlPipe implements PipeTransform {
    transform(str: string): string {
        // tslint:disable
        const _regexOnlySlug = /^(https?:\/\/)*[a-z0-9-]+[a-z0-9-:]+(.[a-z-*]+.)+(\/[a-z0-9-]+)+(\/+)/;
        const _regexPath = /^[\a-z0-9-]+(https?:\/\/)*[a-z0-9-]+(.[a-z-*]+.com)./gm;
        const regexFull = /^(https?:\/\/)*[a-z0-9-]+(.[a-z-*]+.com)./;

        return str.replace(regexFull, '');
    }
}
