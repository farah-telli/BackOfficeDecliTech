import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renetialiser-code',
  imports: [CommonModule, FormsModule],
  templateUrl: './renetialiser-code.component.html',
  styleUrl: './renetialiser-code.component.css'
})
export class RenetialiserCodeComponent {
  code: string = '';
  confirmCode: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  resetCode() {
    const phoneNumber = localStorage.getItem('phoneNumber');

    if (!phoneNumber) {
      alert('Aucun numéro enregistré. Veuillez recommencer le processus.');
      this.router.navigate(['/reset']);
      return;
    }

    if (this.code !== this.confirmCode) {
      alert('Les codes ne correspondent pas.');
      return;
    }

    this.authService.resetCode({
      phoneNumber: phoneNumber,
      code: this.code,
      confirmCode: this.confirmCode
    }).subscribe({
      next: (message) => {
        alert('Code réinitialisé avec succès');
        this.router.navigate(['/sign-in']);
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de la réinitialisation : ' + (err.error || 'Erreur inconnue'));
      }
    });
  }

  goBack() {
  this.router.navigate(['/verif']); // ou l'URL vers laquelle tu veux revenir
}

}


