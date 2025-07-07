import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-module-admin',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './module-admin.component.html',
  styleUrl: './module-admin.component.css'
})
export class ModuleAdminComponent {

      constructor(private router: Router, private authService: AuthService) {}

 modules = [
    {
      nom: 'Développement des jeux vidéos',
      space: 'Ariana S2',
      nb: 2,
      jour: 'Samedi',
      actif: true,
      annule: true,
      checked: false
    },
    {
      nom: 'Code Combat',
      space: 'Ariana S1',
      nb: 11,
      jour: 'Dimanche',
      actif: true,
      annule: false,
      checked: false
    },
    {
      nom: 'Conception Robotique',
      space: 'Ariana S3',
      nb: 20,
      jour: 'Mercredi',
      actif: true,
      annule: false,
      checked: false
    },
    {
      nom: 'Psychologie Positive',
      space: 'Lac S211',
      nb: 5,
      jour: '14/06/2025',
      actif: true,
      annule: false,
      checked: false
    },
    {
      nom: 'Développement des applications',
      space: 'Lac S214',
      nb: 14,
      jour: '14/06/2025',
      actif: true,
      annule: false,
      checked: true
    },
    {
      nom: 'Architecture et ingénierie 3D',
      space: 'Centre Urbain',
      nb: 3,
      jour: '14/06/2025',
      actif: true,
      annule: true,
      checked: true
    },
     {
      nom: 'Robotique intelligente	',
      space: 'Ariana S2',
      nb: 2,
      jour: 'Samedi',
      actif: true,
      annule: true,
      checked: false
    },
    {
      nom: 'Code Combat',
      space: 'Ariana S1',
      nb: 11,
      jour: 'Dimanche',
      actif: true,
      annule: false,
      checked: false
    },
    {
      nom: 'Conception Robotique',
      space: 'Ariana S3',
      nb: 20,
      jour: 'Mercredi',
      actif: true,
      annule: false,
      checked: false
    },
    {
      nom: 'UX/UI Design',
      space: 'Lac S211',
      nb: 5,
      jour: '14/06/2025',
      actif: true,
      annule: false,
      checked: false
    }
  ];

    logout() {
    this.authService.logout();
      alert('Déconnexion réussie');

  }
}

