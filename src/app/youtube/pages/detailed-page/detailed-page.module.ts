import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import VideoCardComponent from '../../components/video-card/video-card.component';
import PipesModule from '../pipes/pipes.module';
import DetailedRoutingModule from './detailed-routing.module';
import DetailedPageComponent from './detailed-page.component';

@NgModule({
  declarations: [VideoCardComponent, DetailedPageComponent],
  imports: [CommonModule, DetailedRoutingModule, PipesModule],
  exports: [VideoCardComponent],
})
export default class DetailedPageModule {}
