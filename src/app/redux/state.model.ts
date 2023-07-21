import { Statistics } from '../youtube/models/search-response.model';

export interface IYoutubeCard {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  videoUrl?: string;
  creationDate: string;
  statistics: Statistics;
}

export interface AppState {
  youtubeCards: IYoutubeCard[];
  counter: number;
}

export interface YoutubeState {
  videos: IYoutubeCard[];
}
