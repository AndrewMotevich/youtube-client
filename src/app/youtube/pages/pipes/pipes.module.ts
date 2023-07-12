import { NgModule } from '@angular/core';

import ShortNumberPipe from '../../pipes/short-number.pipe';
import CardColorPipe from '../../pipes/card-color.pipe';

@NgModule({
  declarations: [ShortNumberPipe, CardColorPipe],
  exports: [ShortNumberPipe, CardColorPipe],
})
export default class PipesModule {}
