import { createFeatureSelector } from '@ngrx/store';
import { IYoutubeCard } from '../state.model';

const selectYoutubeCards = createFeatureSelector<IYoutubeCard[]>('videos');

export default selectYoutubeCards;
