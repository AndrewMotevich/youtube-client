import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export default class CreateCardComponent {
  createCardForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.maxLength(255)]),
    img: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi
      ),
    ]),
    videoLink: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi
      ),
    ]),
    creationDate: new FormControl('', [
      Validators.required,
      this.validateDate(),
    ]),
  });

  // eslint-disable-next-line class-methods-use-this
  validateDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const date = control.value;
      if (!date) {
        return null;
      }
      return date > new Date() ? { dateError: true } : null;
    };
  }

  submit() {
    if (this.createCardForm.valid) {
      console.log('submit:', this.createCardForm.value);
    }
  }
}
