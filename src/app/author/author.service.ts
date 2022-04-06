import { User } from './user.model';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registred?: boolean;
}
@Injectable({ providedIn: 'root' })

export class AuthorService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAG3RNRBD4fea4DaTblLBYdvkqOpbGq-bo',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resDate) => {
          this.handleAuth(
            resDate.email,
            resDate.localId,
            resDate.idToken,
            +resDate.expiresIn
          );
        })
      );
  }
  logout() {
      this.user.next(null);
  }
  login(email: string, password: string): any {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAG3RNRBD4fea4DaTblLBYdvkqOpbGq-bo',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resDate) => {
          this.handleAuth(
            resDate.email,
            resDate.localId,
            resDate.idToken,
            +resDate.expiresIn
          );
        })
      );
  }
  private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Не известная ошибка!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Уже есть такой email!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Нет такой email!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Неверный пароль';
        break;
    }
    return throwError(errorMessage);
  }
}
