import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/AuthService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verif-compte',
  templateUrl: './verif-compte.component.html',
  styleUrls: ['./verif-compte.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class VerifCompteComponent implements OnInit {
  code: string = '';
  phoneNumber: string | null = '';
  codeError: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.phoneNumber = localStorage.getItem('phoneNumber');
    if (!this.phoneNumber) {
      alert('Aucun numéro transmis.');
      this.router.navigate(['/reset']);
    }
  }

  verifyCode() {
    if (!this.code || this.code.length !== 6) {
      this.codeError = true;
      return;
    }

    if (!this.phoneNumber) {
      alert('Erreur : aucun numéro enregistré.');
      this.router.navigate(['/reset']);
      return;
    }

    this.authService.verifyCode({ phoneNumber: this.phoneNumber, code: this.code })
      .subscribe({
        next: () => {
          alert('✅ Vérification réussie');
          this.router.navigate(['/renetialiser']);
        },
        error: (err) => {
          console.error('Erreur de vérification :', err);
          alert('Code invalide ou expiré');
        }
      });
  }

  clearError() {
    this.codeError = false;
  }
  goBack() {
  this.router.navigate(['/reset']); // ou l'URL vers laquelle tu veux revenir
}

}