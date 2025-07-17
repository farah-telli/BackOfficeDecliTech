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


}
