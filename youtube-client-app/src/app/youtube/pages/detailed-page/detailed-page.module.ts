import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import VideoCardComponent from '../../components/video-card/video-card.component';
import MainPageModule from '../main-page/main-page.module';

@NgModule({
  declarations: [VideoCardComponent],
  imports: [CommonModule, MainPageModule],
  exports: [VideoCardComponent],
})
export default class DetailedPageModule {}
