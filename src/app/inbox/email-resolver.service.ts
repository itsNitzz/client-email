import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Email } from './email';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<Email> {
  constructor(private emailService: EmailService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot
  ): Email | Observable<Email> | Promise<Email> {
    return this.emailService.fetchEmailData(route.params['id']).pipe(
      catchError(() => {
        this.router.navigate(['notFound']);

        return EMPTY;
      })
    );
  }
}
