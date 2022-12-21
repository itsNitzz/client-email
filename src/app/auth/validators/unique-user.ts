import { AbstractControl, AsyncValidator } from '@angular/forms';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class UniqueUser implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: AbstractControl) => {
    const { value } = control;

    return this.authService.usernameAvailable(value).pipe(
      map(() => null),
      catchError((error) => {
        if (error.error.username) {
          return of({ usernameAlreadyExist: true });
        }
        return of({ noConnection: true });
      })
    );
  };
}
