import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthService } from '../../services/AuthService';
import { ModuleSessionService } from './../../services/ModuleSessionService';

export interface FlatModuleSession {
  id: number;
  jour: string;
  heure: string;
  coBuildSpaceName: string;
  moduleTitle: string;
  instructeurs: string[];
  tranche: string;
  actif?: boolean;
  annule?: boolean;
  checked?: boolean;
  enrolledCount?: number;
}

@Component({
  selector: 'app-module-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    MatSnackBarModule
  ],
  templateUrl: './module-admin.component.html',
  styleUrls: ['./module-admin.component.css']
})
export class ModuleAdminComponent {
  searchTerm: string = '';
  modules: FlatModuleSession[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;

  constructor(
    private router: Router,
    private authService: AuthService,
    private moduleSessionService: ModuleSessionService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadModules();
  }

  loadModules() {
    this.moduleSessionService.getAllSessions().subscribe(
      (sessions: any[]) => {
        this.modules = sessions.map((s) => ({
          ...s,
          checked: false,
          actif: s.isActive,
          annule: s.isAnnule || false,
          enrolledCount: s.enrolledCount || 0
        }));
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
    this.moduleSessionService.activerSession(session.id).subscribe(
      (updatedSession) => {
        const index = this.modules.findIndex(m => m.id === updatedSession.id);
        if (index !== -1) {
          this.modules[index].actif = true;
        }
        this.showToast('Session activée avec succès !');
      },
      (error) => {
        this.showToast('Erreur lors de l\'activation de la session', true);
        console.error(error);
      }
    );
  }

onDesactiver(session: FlatModuleSession) {
  this.moduleSessionService.desactiverSession(session.id).subscribe(
    () => {
      session.actif = false; // ✅ On change l'état localement
      this.showToast('Session désactivée avec succès !');
    },
    (error) => {
      this.showToast('Erreur lors de la désactivation de la session', true);
      console.error(error);
      session.actif = true; // On remet true si l'appel API échoue
    }
  );
}


  onAnnulerSeance(session: FlatModuleSession) {
    session.annule = !session.annule;
    this.moduleSessionService.annulerSeance(session.id, session.annule).subscribe(
      (updatedSession) => {
        const index = this.modules.findIndex(m => m.id === updatedSession.id);
        if (index !== -1) {
          this.modules[index].annule = updatedSession.annule;
        }
        const msg = session.annule ? 'Session annulée' : 'Annulation retirée';
        this.showToast(msg);
      },
      (error) => {
        this.showToast('Erreur lors de la mise à jour de l\'état de la session', true);
        console.error(error);
      }
    );
  }

  private showToast(message: string, isError: boolean = false) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      panelClass: isError ? 'error-snackbar' : 'success-snackbar'
    });
  }
}
