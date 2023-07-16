import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeAll } from 'rxjs/operators';
import YoutubeApiService from 'src/app/youtube/services/youtube-api.service';
import {
  getYoutubeCardsFromApi,
  setYoutubeCards,
} from '../actions/youtube-cards.action';
import { IYoutubeCard } from '../state.model';

@Injectable()
export default class YoutubeApiEffects {
  public youtubeApiSideEffect$ = createEffect(() => {
    try {
      return this.actions$.pipe(
        ofType(getYoutubeCardsFromApi),
        map(() => this.youtubeApi.searchResponse),
        mergeAll(),
        map((res) =>
          res.map<IYoutubeCard>((obj) => ({
            title: obj.snippet.title,
            statistics: obj.statistics,
            imageUrl: obj.snippet.thumbnails['medium'].url,
            videoUrl: obj.id,
            creationDate: obj.snippet.publishedAt,
          }))
        ),
        map((res) => setYoutubeCards({ videos: [...res] }))
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
