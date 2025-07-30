import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/AuthService';
import { ReservationService, Reservation } from '../../services/ReservationService';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit {

  reservations: any[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private reservationService: ReservationService
  ) {}


ngOnInit() {
  this.loadReservations();
}

loadReservations() {
  this.reservationService.getReservations().subscribe((data: any[]) => {
    this.reservations = data;
  });
}

getTrancheFromTime(time: string): string {
  if (!time) return '';
  const hour = parseInt(time.split(':')[0]);
  if (hour >= 13) return '13-16';
  else return '8-12';
}



  logout() {
    this.authService.logout();
    alert('Déconnexion réussie');
    this.router.navigate(['/login']);
  }

}