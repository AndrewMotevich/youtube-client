import { createReducer, on } from '@ngrx/store';
import { EMPTY_STATISTICS } from 'src/app/auth/constants/constants';
import { IYoutubeCard } from '../state.model';
import addYoutubeCard from '../actions/custom-cards.action';

export const initialState: IYoutubeCard[] = [
  {
    id: '123',
    creationDate:
      'Thu Jul 13 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    title: 'My custom card',
    description: 'My custom card description',
    statistics: EMPTY_STATISTICS,
  },
];

export const CustomCardsReducer = createReducer(
  initialState,
  on(addYoutubeCard, (state, props): IYoutubeCard[] => [...state, props.card])
);
