import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/AuthService';

@Component({
  standalone: true,
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class SignInComponent {
  form: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  onSubmit() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    this.authService.loginWithEmail({ email, password }).subscribe({
      next: (response: any) => {
        if (response.token) {
          this.authService['storeToken'](response.token); // appelle la méthode privée
          this.successMessage = '✅ Connexion réussie ! Redirection...';
          this.errorMessage = '';
          setTimeout(() => {
            this.router.navigate(['/admin']);
          }, 2000);
        } else {
          this.errorMessage = '❌ Erreur : token manquant dans la réponse.';
          this.successMessage = '';
        }
      },
      error: (err) => {
        console.error(err);
        this.successMessage = '';
        this.errorMessage = '❌ Email ou mot de passe incorrect.';
      }
    });
  }
}
