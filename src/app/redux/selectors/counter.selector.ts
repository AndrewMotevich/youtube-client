import { createFeatureSelector } from '@ngrx/store';

const selectFeatureCount = createFeatureSelector<number>('counter');

export default selectFeatureCount;
