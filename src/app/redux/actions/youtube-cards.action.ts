import { createAction, props } from '@ngrx/store';
import { IYoutubeCard } from '../state.model';

export const getYoutubeCards = createAction(
  '[Search-result component] Get cards from Api (side effect)',
  props<{ queryString?: string }>()
);

export const getYoutubeCardsSuccess = createAction(
  '[Search-result component] Set cards to store',
  props<{ videos: IYoutubeCard[] }>()
);
