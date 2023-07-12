import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { URL_VALIDATION_REGEX } from '../../constants/constants';

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
    img: new FormControl('', [
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

  // eslint-disable-next-line class-methods-use-this
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
    console.log('submit:', this.createCardForm.value);
  }
}
