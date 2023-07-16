import { createReducer, on } from '@ngrx/store';
import { setYoutubeCards } from '../actions/youtube-cards.action';
import { IYoutubeCard } from '../state.model';

export const initialState: IYoutubeCard[] = [];

export const YoutubeCardsReducer = createReducer(
  initialState,
  on(setYoutubeCards, (state, props): IYoutubeCard[] => props.videos)
);
