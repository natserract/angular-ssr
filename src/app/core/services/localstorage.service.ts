import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';
import { ILocalStorage } from '../models';

type serializable = object;

@Injectable()
export class LocalStorageService {
    private cache: ILocalStorage;
    constructor() {
        this.cache = Object.create( null );
    }

    setItem<T extends serializable>( key: string, value: T ): BehaviorSubject<T> {
       try {
           const serializeState = JSON.stringify(value);
           localStorage.setItem( key, serializeState );

           if (this.cache [ key ]) {
               this.cache [key].next( value );
               return this.cache[key];
           }
       } catch (err) {
           throw new Error(err);
       }
    }

    getItem<T extends serializable>( key: string ): BehaviorSubject<T> {
        try {
            if (this.cache [ key ]) {
                return this.cache[key];
            } else {
                return this.cache[key] = new BehaviorSubject(
                    JSON.parse( localStorage.getItem( key ) )
                );
            }
        } catch (err) {
            throw new Error('ERROR bro!:' + err);
        }
    }

    removeItem( key: string ) {
        localStorage.removeItem( key );
        if ( this.cache[ key ] ) {
          this.cache[ key ].next( undefined );
        }
      }
}
