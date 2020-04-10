
import { BehaviorSubject  } from 'rxjs';

export interface ILocalStorage {
    [key: string]: BehaviorSubject<any>;
}

