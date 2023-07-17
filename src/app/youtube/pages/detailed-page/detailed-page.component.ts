import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DetailedPageComponent {}
