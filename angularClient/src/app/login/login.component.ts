import { Component, OnInit } from '@angular/core';
import { AuthService } from '../admin/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router) { }

  public username: string;
  public password: string;

  ngOnInit() {
  }

  signon(username, password) {
    this._authService.login( username, password ).subscribe(
      (res) => {
        console.log(res);
        if (res === 'Validado') {
          this._authService.isLoggedIn = true;
          window.sessionStorage.setItem('isLoggedIn', '1');
          this.router.navigate(['/main']);
        }
      }
    );
    console.log(this._authService);
  }
}
