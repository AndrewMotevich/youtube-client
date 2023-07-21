import { Injectable } from '@angular/core';
import { Observable, catchError, map, mergeAll, BehaviorSubject } from 'rxjs';
import { IYoutubeCard } from 'src/app/redux/state.model';
import YoutubeApiService from './youtube-api.service';
import mockResponse from '../../../mock/results.json';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeAdapterService {
  constructor(private youtubeApiService: YoutubeApiService) {}

  public getVideos(queryString: string): Observable<IYoutubeCard[]> {
    return this.youtubeApiService.getVideoByQueryString(queryString).pipe(
      map((searchResponse) =>
        searchResponse.items.map((item) => item.id.videoId)
      ),
      map((idsArray) => this.youtubeApiService.getVideosByIds(idsArray)),
      mergeAll(),
      catchError(() => new BehaviorSubject(mockResponse)),
      map((videosResponse) =>
        videosResponse.items.map<IYoutubeCard>((obj) => ({
          id: obj.id,
          title: obj.snippet.title,
          statistics: obj.statistics,
          imageUrl: obj.snippet.thumbnails.maxres.url,
          videoUrl: obj.id,
          creationDate: obj.snippet.publishedAt,
        }))
      )
    );
  }
}
