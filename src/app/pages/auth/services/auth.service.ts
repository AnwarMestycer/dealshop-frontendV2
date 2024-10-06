import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environments';
import { BehaviorSubject, tap } from 'rxjs';

interface User{
  name:string
  token: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   API:string = environment.api
   private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string){
    return this.http.post<any>(this.API, {email, password}).pipe(
      tap((user => {
        localStorage.setItem('token', user.token);
        this.currentUserSubject.next(user);
      })
    ))
  }

  register(username:string, email: string, password:string ){
    return this.http.post<any>(this.API, {username, email, password})
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/'])
  }
}
