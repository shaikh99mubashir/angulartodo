import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { sendData } from './data.actions';

@Injectable()
export class DataEffects {
  sendData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(sendData),
        tap(({ payload }) => {
          // Perform any necessary side effect operations here
          console.log('Data sent:', payload);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
