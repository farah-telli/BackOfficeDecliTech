import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/AuthService';
import { ModuleSessionService } from '../../services/ModuleSessionService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; // si tu utilises la pagination
import { MatSortModule } from '@angular/material/sort';  
import { FeedbackService } from '../../services/FeedbackService';
import { Feedback } from '../../models/feedback';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-avis-list',
  imports: [RouterModule,CommonModule, FormsModule,    MatTableModule,
    MatPaginatorModule,
    MatSortModule,],
  templateUrl: './avis-list.component.html',
  styleUrl: './avis-list.component.css'
})


export class AvisAdminComponent implements OnInit {
  avisList: any[] = [];
  searchText: string = '';
  currentPage = 1;
  itemsPerPage = 5;

  displayedColumns: string[] = ['parentName', 'content', 'rating', 'submittedAt', 'action'];

  constructor(private feedbackService: FeedbackService,
              private authService: AuthService,
              private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks() {
    this.feedbackService.getAllFeedbacks().subscribe({
      next: (data) => {
        this.avisList = data;
      },
      error: (err) => {
        console.error('Erreur chargement avis', err);
      }
    });
  }

  filteredAvis() {
    const filtered = this.avisList.filter(a =>
      a.parentName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      a.content.toLowerCase().includes(this.searchText.toLowerCase())
    );
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.avisList.filter(a =>
      a.parentName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      a.content.toLowerCase().includes(this.searchText.toLowerCase())
    ).length / this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  supprimerAvis(avis: any) {
  }
    logout() {
    this.authService.logout();
    alert('Déconnexion réussie');
    this.router.navigate(['/login']);
  }
}




