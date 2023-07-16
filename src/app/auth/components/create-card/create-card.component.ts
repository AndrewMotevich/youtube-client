import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import addYoutubeCard from 'src/app/redux/actions/custom-cards.action';
import { IYoutubeCard } from 'src/app/redux/state.model';
import { Router } from '@angular/router';
import {
  EMPTY_STATISTICS,
  URL_VALIDATION_REGEX,
} from '../../constants/constants';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateCardComponent {
  public createCardForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.maxLength(255)]),
    imageUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(URL_VALIDATION_REGEX),
    ]),
    videoLink: new FormControl('', [
      Validators.required,
      Validators.pattern(URL_VALIDATION_REGEX),
    ]),
    creationDate: new FormControl('', [
      Validators.required,
      this.validateDate(),
    ]),
  });

  constructor(private store: Store, private router: Router) {}

  private validateDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const date = control.value;
      if (!date) {
        return null;
      }
      return date > new Date() ? { dateError: true } : null;
    };
  }

  public submit() {
    if (!this.createCardForm.valid) return;
    this.store.dispatch(
      addYoutubeCard({
        card: {
          ...(this.createCardForm.value as IYoutubeCard),
          id: Date.now().toString(),
          statistics: EMPTY_STATISTICS,
        },
      })
    );
    this.createCardForm.reset();
    this.router.navigate(['/main']);
  }
}
