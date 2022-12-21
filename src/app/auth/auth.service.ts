import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Credentials {
  username: string;
  password: string;
  passwordConfirmation?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signedin$ = new BehaviorSubject<any>(null);
  rootURL = 'https://api.angular-email.com/auth';
  username = '';

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<{ available: boolean }>(`${this.rootURL}/username`, {
      username: username,
    });
  }

  signup(credentials: Credentials) {
    return this.http
      .post<{ username: string }>(`${this.rootURL}/signup`, credentials)
      .pipe(
        tap(({ username }) => {
          this.signedin$.next(true);
          this.username = username;
        })
      );
  }

  signedinStatus() {
    return this.http
      .get<{ authenticated: boolean; username: string }>(
        `${this.rootURL}/signedin`
      )
      .pipe(
        tap(({ authenticated, username }) => {
          this.username = username;
          this.signedin$.next(authenticated);
        })
      );
  }

  signout() {
    return this.http.post(`${this.rootURL}/signout`, {}).pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }

  signin(signinData: Credentials) {
    return this.http
      .post<Credentials>(`${this.rootURL}/signin`, signinData)
      .pipe(
        tap(({ username }) => {
          this.username = username;
          this.signedin$.next(true);
        })
      );
  }
}
