import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import HeaderComponent from './components/header/header.component';
import SortSettingsComponent from './components/sort-settings/sort-settings.component';
import ArrowIncDecPipe from './pipes/arrow-inc-dec.pipe';
import AppRoutingModule from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, SortSettingsComponent, ArrowIncDecPipe],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent],
})
export default class CoreModule {}
