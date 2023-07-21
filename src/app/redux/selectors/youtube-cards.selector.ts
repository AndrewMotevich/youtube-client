import { createFeatureSelector } from '@ngrx/store';
import { YoutubeState } from '../state.model';

const selectYoutubeCards = createFeatureSelector<YoutubeState>('videos');

export default selectYoutubeCards;
