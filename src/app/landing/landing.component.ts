import { Component } from '@angular/core';
import { Router } from '@angular/router';

const PASSWORD = '123456';
const LOGIN = 'test';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  password: string;
  login: string;
  passwordFail = false;

  constructor(private router: Router) {

  }

  onLoginClick(): void {
    if (this.password === PASSWORD && this.login === LOGIN) {
      this.router.navigateByUrl('platform/dashboard');
    } else {
      this.passwordFail = true;
      console.error('wrong login');
      setTimeout(() => this.passwordFail = false, 500);
    }
  }
}
