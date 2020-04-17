
import { Action } from '@ngrx/store';

/*
 * For alternative you can use
 * createAction() from @ngx/store
 * but currently we using class for implements the action
*/

export enum SelectCountAction {
    INCREMENT = '[Count] INCREMENT',
}

export class Increment implements Action {
    readonly type = SelectCountAction.INCREMENT;
}

export type CountActions = Increment;
