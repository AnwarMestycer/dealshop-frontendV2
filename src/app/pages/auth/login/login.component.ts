import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
password: string = '';
email: string = '';
constructor(private authService:AuthService){}

login(email:string, password: string){
  console.log('from class', email, password)
  this.authService.login(email, password)
}
}
