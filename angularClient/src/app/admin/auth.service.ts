import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {tap, delay} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = (window.sessionStorage.getItem('isLoggedIn') && true);
  redirectUrl: string;

  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    return this.http.post(
      '/usuarios/login',
      {user: email, pass: password},
      { responseType: 'text'}
    );
  }
  logout(): void {
    this.isLoggedIn = false;
    window.sessionStorage.clear();
  }
}
