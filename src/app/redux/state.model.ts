import { Statistics } from '../youtube/models/search-response.model';

export interface ICustomCard {
  title: string;
  description?: string;
  imageUrl: string;
  videoUrl: string;
  creationDate: string;
  statistics?: Statistics;
}

export interface IYoutubeCard {
  title: string;
  description?: string;
  imageUrl: string;
  videoUrl?: string;
  creationDate: string;
  statistics: Statistics;
}

export interface FeatureState {
  counter: number;
}

export interface AppState {
  youtubeCards?: IYoutubeCard[];
  customCards?: ICustomCard[];
  feature: FeatureState;
}
