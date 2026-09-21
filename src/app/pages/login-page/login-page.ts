import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // SEND FORM DATA TO AuthService
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('Login Success', res);
          // If SUCCESS
          this.router.navigate(['/student']); 
        },
        error: (err) => {
          console.error('Login Failed', err);
          alert('Email or Password not correct!!!');
        }
      });
    }
  }

}
