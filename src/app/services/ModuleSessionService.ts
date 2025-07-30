// src/app/services/ModuleSessionService.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleSession, Page } from '../models/ModuleSession';

@Injectable({
  providedIn: 'root',
})
export class ModuleSessionService {
  private readonly baseUrl = 'http://localhost:8089/declitech/api/moduleSessions';

  constructor(private http: HttpClient) {}

getAllSessions(): Observable<ModuleSession[]> {
  return this.http.get<ModuleSession[]>(`${this.baseUrl}/response`);
}

  activerSession(id: number): Observable<ModuleSession> {
    const url = `${this.baseUrl}/${id}/activate`;
    return this.http.patch<ModuleSession>(url, {}); // Le corps peut rester vide
  }

    desactiverSession(id: number): Observable<ModuleSession> {
    const url = `${this.baseUrl}/${id}/deactivate`;
    return this.http.patch<ModuleSession>(url, {});
  }

  // Méthode pour annuler une séance
  annulerSeance(id: number, isAnnule: boolean): Observable<ModuleSession> {
    const url = `${this.baseUrl}/${id}/cancel`;
    return this.http.patch<ModuleSession>(url, { isAnnule });
  }
}
