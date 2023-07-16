import { createAction, props } from '@ngrx/store';
import { IYoutubeCard } from '../state.model';

const addYoutubeCard = createAction(
  '[Admin-page component] Set custom cards to store',
  props<{ card: IYoutubeCard }>()
);

export default addYoutubeCard;
