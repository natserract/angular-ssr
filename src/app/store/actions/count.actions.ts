
import { Action } from '@ngrx/store';

/*
 * For alternative you can use
 * createAction() from @ngx/store
 * but currently we using class for implements the action
*/

export enum SelectCountAction {
    INCREMENT = '@@COUNT INCREMENT',
    DECREMENT = '@@COUNT DECREMENT',
    COUNTSENDPAYLOAD = '@@COUNT SENDPAYLOAD'
}

export class IncrementAction implements Action {
    readonly type = SelectCountAction.INCREMENT;
}
export class DecrementAction implements Action {
    readonly type = SelectCountAction.DECREMENT;
}

export class SendPayloadAction implements Action {
    readonly type = SelectCountAction.COUNTSENDPAYLOAD;
    constructor(
        public payload: {
            message: string
        }
    ){}
}

export type CountActions = IncrementAction | DecrementAction | SendPayloadAction;
