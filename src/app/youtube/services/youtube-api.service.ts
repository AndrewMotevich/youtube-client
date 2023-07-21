import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  IPreSearchResponse,
  ISearchResponse,
} from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeApiService {
  constructor(private http: HttpClient) {}

  public getVideosByIds(videoIdsArray: string[]) {
    const getVideosHttpParams = new HttpParams()
      .append('id', videoIdsArray.join())
      .append('part', 'snippet,statistics');

    return this.http.get<ISearchResponse>(
      'https://wwwwww.googleapis.com/youtube/v3/videos',
      {
        params: getVideosHttpParams,
      }
    );
  }

  public getVideoByQueryString(searchQuery = 'angular', maxResult = 3) {
    const searchHttpParams = new HttpParams()
      .append('type', 'video')
      .append('q', searchQuery)
      .append('maxResults', maxResult.toString());

    return this.http.get<IPreSearchResponse>(
      'https://wwwwww.googleapis.com/youtube/v3/search',
      {
        params: searchHttpParams,
      }
    );
  }
}
