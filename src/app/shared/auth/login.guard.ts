import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const loggedIn = await this.authService.isLoggedIn();
    if (loggedIn) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
