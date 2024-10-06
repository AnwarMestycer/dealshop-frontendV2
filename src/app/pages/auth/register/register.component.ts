import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
name: string = '';
password: string = '';
confirmPassword: string = '';
email: string = '';
confirmed: boolean = false
constructor(private authService: AuthService){}


 checkConfirmPassword(password: string, confirmPassword: string) {
  if (password === confirmPassword) {
    this.confirmed = true; // Passwords match
  } else {
    this.confirmed = false; // Passwords do not match
  }
}

  register(name: string, email:string, password: string){
    this.authService.register(name, email, password)
  }
}
