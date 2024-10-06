import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('jwtToken');

    if (token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      if (!this.tokenExpired(tokenDecode.exp)) return true;
    }

    this.router.navigate(['/auth']);
    return false;
  }

  private tokenExpired(expiration: any): boolean {
    return Math.floor(new Date().getTime() / 1000) >= expiration;
  }
}
