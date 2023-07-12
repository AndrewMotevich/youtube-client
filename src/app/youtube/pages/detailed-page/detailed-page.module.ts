import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import VideoCardComponent from '../../components/video-card/video-card.component';
import DetailedRoutingModule from './detailed-routing.module';
import DetailedPageComponent from './detailed-page.component';
import ShortNumberPipe from '../../pipes/short-number.pipe';
import CardColorPipe from '../../pipes/card-color.pipe';

@NgModule({
  declarations: [VideoCardComponent, DetailedPageComponent],
  imports: [
    CommonModule,
    DetailedRoutingModule,
    ShortNumberPipe,
    CardColorPipe,
  ],
  exports: [VideoCardComponent],
})
export default class DetailedPageModule {}
