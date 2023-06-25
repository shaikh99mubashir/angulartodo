import { createAction, props } from '@ngrx/store';

export const sendData = createAction('[Data] Send Data', props<{ payload: any }>());


export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');