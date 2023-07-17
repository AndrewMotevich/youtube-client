import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import response from '../../../mock/results.json';
import {
  IPreSearchResponse,
  ISearchResponse,
  ItemObj,
} from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeApiService {
  public searchResponse = new BehaviorSubject<ItemObj[]>(response.items);

  constructor(private http: HttpClient) {
    this.getVideoByQueryString();
  }

  public getVideosByIds(videoIdsArray: string[]) {
    const getVideosHttpParams = new HttpParams()
      .append('id', videoIdsArray.join())
      .append('part', 'snippet,statistics');
    return this.http.get<ISearchResponse>(
      'https://www.googleapis.com/youtube/v3/videos',
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

    this.http
      .get<IPreSearchResponse>('https://www.googleapis.com/youtube/v3/search', {
        params: searchHttpParams,
      })
      .subscribe((searchResponse) => {
        const videosIds = searchResponse.items.map((elem) => elem.id.videoId);

        this.getVideosByIds(videosIds).subscribe((res) =>
          this.searchResponse.next(res.items)
        );
      });
  }
}
