import { createAction, props } from '@ngrx/store';
import { IYoutubeCard } from '../state.model';

export const getYoutubeCardsFromApi = createAction(
  '[Search-result component] Get cards from Api (side effect)'
);

export const setYoutubeCards = createAction(
  '[Search-result component] Set cards to store',
  props<{ videos: IYoutubeCard[] }>()
);
