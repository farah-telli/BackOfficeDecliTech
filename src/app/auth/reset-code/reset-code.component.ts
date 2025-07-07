import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/AuthService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: ['./reset-code.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class ResetCodeComponent {
  phone: string = '';
  phoneError: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}


sendCode() {
  const phoneTrimmed = this.phone.trim();
  this.successMessage = '';
  this.errorMessage = '';
  this.phoneError = false;

  if (phoneTrimmed && phoneTrimmed.length === 8) {
    this.authService.sendVerificationCode({ phoneNumber: phoneTrimmed })
      .subscribe({
        next: (message) => {
          this.successMessage = 'Code envoyé avec succès !';
          localStorage.setItem('phoneNumber', phoneTrimmed);
          setTimeout(() => this.router.navigate(['/verif']), 1000);
        },
        error: (err) => {
          console.error('Erreur lors de l\'envoi du code', err);
          if (err.status === 409) {
            this.errorMessage = 'Un code a déjà été envoyé aujourd’hui.';
          } else {
            this.errorMessage = err.error || 'Erreur inconnue';
          }
        }
      });
  } else {
    this.phoneError = true;
  }
}


  clearError() {
    this.phoneError = false;
    this.errorMessage = '';
  }

  goBack() {
    this.router.navigate(['/sign-in']);
  }
}
