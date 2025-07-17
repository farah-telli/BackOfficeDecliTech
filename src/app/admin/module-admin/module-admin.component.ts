import { ModuleSessionService } from './../../services/ModuleSessionService';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/AuthService';
import { SidebarComponent } from "../../sidebar/sidebar.component";

export interface FlatModuleSession {
  id: number;
  jour: string;
  heure: string;
  coBuildSpaceName: string;
  moduleTitle: string;
  instructeurs: string[];
  tranche: string;
  actif?: boolean; // Ajout de l'attribut actif
  annule?: boolean; // Ajout de l'attribut annule
  checked?: boolean;
}

@Component({
  selector: 'app-module-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SidebarComponent],
  templateUrl: './module-admin.component.html',
  styleUrls: ['./module-admin.component.css']
})
export class ModuleAdminComponent {
  searchTerm: string = '';
  modules: FlatModuleSession[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private moduleSessionService: ModuleSessionService
  ) {}

  ngOnInit() {
    this.loadModules();
  }

  loadModules() {
    this.moduleSessionService.getAllSessions().subscribe(
      (sessions: any[]) => {
        this.modules = sessions.map((s) => ({ ...s, checked: false, actif: true, annule: false })); // Initialisation des états
      },
      (err) => {
        console.error('Erreur chargement sessions', err);
        this.modules = [];
      }
    );
  }

  logout() {
    this.authService.logout();
    alert('Déconnexion réussie');
    this.router.navigate(['/login']);
  }

  toggleAllSelection() {
    const allChecked = this.modules.every((m) => m.checked);
    this.modules.forEach((m) => (m.checked = !allChecked));
  }

  getInstructorsList(instrs: string[]): string {
    return instrs.length > 0 ? instrs.join(', ') : 'Aucun';
  }

  onActiver(session: FlatModuleSession) {
    session.actif = true; // Mise à jour de l'état
    console.log('Activé', session);
    // Ici, tu peux appeler un service pour mettre à jour l'état sur le serveur si nécessaire
  }

  onDesactiver(session: FlatModuleSession) {
    session.actif = false; // Mise à jour de l'état
    console.log('Désactivé', session);
    // Ici, tu peux appeler un service pour mettre à jour l'état sur le serveur si nécessaire
  }

  onAnnulerSeance(session: FlatModuleSession) {
    session.annule = !session.annule; // Inverser l'état d'annulation
    console.log(session.annule ? 'Annulé' : 'Rétabli', session);
    // Ici, tu peux appeler un service pour mettre à jour l'état sur le serveur si nécessaire
  }
}