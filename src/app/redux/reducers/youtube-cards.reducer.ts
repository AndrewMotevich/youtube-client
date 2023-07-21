import { createReducer, on } from '@ngrx/store';
import { getYoutubeCardsSuccess } from '../actions/youtube-cards.action';
import { YoutubeState } from '../state.model';

export const initialState: YoutubeState = { videos: [] };

export const YoutubeCardsReducer = createReducer(
  initialState,
  on(
    getYoutubeCardsSuccess,
    (state, props): YoutubeState => ({
      ...state,
      videos: [...props.videos],
    })
  )
);
