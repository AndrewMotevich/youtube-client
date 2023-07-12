import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemObj } from '../../models/search-response.model';
import MockApiService from '../../services/mock-api.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export default class VideoCardComponent implements OnInit {
  private options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  public videoItem!: ItemObj;

  public enFormatDate!: string;

  public img!: string;

  public parseDate!: number;

  constructor(private route: ActivatedRoute, private mockApi: MockApiService) {}

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.mockApi.getItemById(id as string).subscribe((videoItem) => {
      this.videoItem = videoItem;
      this.img = videoItem?.snippet.thumbnails['maxres'].url;
      this.parseDate = Date.parse(videoItem.snippet.publishedAt);
      this.enFormatDate = new Intl.DateTimeFormat('en-US', this.options).format(
        this.parseDate
      );
    });
  }
}
