import { Statistics } from '../youtube/models/search-response.model';

export interface IYoutubeCard {
  title: string;
  description?: string;
  imageUrl: string;
  videoUrl?: string;
  creationDate: string;
  statistics?: Statistics;
}

export interface AppState {
  youtubeCards: IYoutubeCard[];
  counter: number;
}
