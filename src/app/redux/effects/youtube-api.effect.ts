import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeAll } from 'rxjs/operators';
import YoutubeApiService from 'src/app/youtube/services/youtube-api.service';
import {
  getYoutubeCards,
  getYoutubeCardsSuccess,
} from '../actions/youtube-cards.action';
import { IYoutubeCard } from '../state.model';

@Injectable()
export default class YoutubeApiEffects {
  public getYoutubeCardsEffect$ = createEffect(() => {
    try {
      return this.actions$.pipe(
        ofType(getYoutubeCards),
        map(() => this.youtubeApi.searchResponse),
        mergeAll(),
        // push this logic to service (adapter pattern / middleware)
        map((res) =>
          res.map<IYoutubeCard>((obj) => ({
            id: obj.id,
            title: obj.snippet.title,
            statistics: obj.statistics,
            imageUrl: obj.snippet.thumbnails['maxres'].url,
            videoUrl: obj.id,
            creationDate: obj.snippet.publishedAt,
          }))
        ),
        map((res) => getYoutubeCardsSuccess({ videos: [...res] }))
      );
    } catch (error) {
      throw new Error();
    }
  });

  constructor(
    private actions$: Actions,
    private youtubeApi: YoutubeApiService
  ) {}
}
