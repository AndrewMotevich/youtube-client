import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import HeaderComponent from './components/header/header.component';
import SortSettingsComponent from './components/sort-settings/sort-settings.component';
import ArrowIncDecPipe from './pipes/arrow-inc-dec.pipe';

@NgModule({
  declarations: [HeaderComponent, SortSettingsComponent, ArrowIncDecPipe],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export default class CoreModule {}
