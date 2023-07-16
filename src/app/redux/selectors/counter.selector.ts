import { createFeatureSelector } from '@ngrx/store';

// eslint-disable-next-line import/prefer-default-export
export const selectFeatureCount = createFeatureSelector<number>('counter');
