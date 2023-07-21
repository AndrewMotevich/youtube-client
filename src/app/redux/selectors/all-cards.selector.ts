import { createSelector } from '@ngrx/store';
import selectCustomCards from './custom-cards.selector';
import selectYoutubeCards from './youtube-cards.selector';
import { YoutubeState } from '../state.model';

const selectAllCards = createSelector(
  selectCustomCards,
  selectYoutubeCards,
  (customCards: YoutubeState, youtubeCards: YoutubeState) => [
    ...customCards.videos,
    ...youtubeCards.videos,
  ]
);

export default selectAllCards;
