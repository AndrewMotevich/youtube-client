import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeAll } from 'rxjs/operators';
import YoutubeAdapterService from 'src/app/youtube/services/youtube-adapter.service';
import {
  getYoutubeCards,
  getYoutubeCardsSuccess,
} from '../actions/youtube-cards.action';

@Injectable()
export default class YoutubeApiEffects {
  public getYoutubeCardsEffect$ = createEffect(() => {
    try {
      return this.actions$.pipe(
        ofType(getYoutubeCards),
        map((caughtAction) =>
          this.youtubeAdapter.getVideos(caughtAction.queryString || '')
        ),
        mergeAll(),
        map((youtubeCards) =>
          getYoutubeCardsSuccess({ videos: [...youtubeCards] })
        )
      );
    } catch (error) {
      throw new Error();
    }
  });

  constructor(
    private actions$: Actions,
    private youtubeAdapter: YoutubeAdapterService
  ) {}
}
