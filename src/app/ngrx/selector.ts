import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataState } from './data.reducer';

export const selectDataState = createFeatureSelector<DataState>('data');

export const getData = createSelector(selectDataState, (state: DataState) => state.data);