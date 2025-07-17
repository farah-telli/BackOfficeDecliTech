import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 @Output() logoutEvent = new EventEmitter<void>();

  // Méthode pour émettre l'événement de déconnexion
  logout() {
    this.logoutEvent.emit();
  }

}
