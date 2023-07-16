import { createFeatureSelector } from '@ngrx/store';
import { IYoutubeCard } from '../state.model';

const selectCustomCards = createFeatureSelector<IYoutubeCard[]>('customCards');

export default selectCustomCards;
