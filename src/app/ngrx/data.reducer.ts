import { createReducer, on } from '@ngrx/store';
import { sendData ,increment,decrement,reset} from './data.actions';

export interface DataState {
  data: any;
}

export const initialState: DataState = {
  data: null,
};

export const dataReducer = createReducer(
  initialState,
  on(sendData, (state, { payload }) => ({
    ...state,
    data: payload,
  })),
  // on(increment, (state) => state + 1),
  // on(decrement, (state) => state - 1),
  // on(reset, (state) => 0)
);
