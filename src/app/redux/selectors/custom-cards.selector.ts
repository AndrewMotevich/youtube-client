import { createFeatureSelector } from '@ngrx/store';
import { YoutubeState } from '../state.model';

const selectCustomCards = createFeatureSelector<YoutubeState>('customCards');

export default selectCustomCards;
