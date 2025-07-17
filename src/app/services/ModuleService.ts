// src/app/services/module.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ModuleResponse {
  id: number;
  title: string;
  description: string;
  jour: string;
  heure: string;
  tranche: string;
  capacite: number;
  nbSeances: number;
  actif: boolean;
  annule: boolean;
  enrolledCount: number;
  coBuildSpaceName: number;
  instructeurs: string[];
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;  // current page (0-indexed)
}

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private apiUrl = 'http://localhost:8089/declitech/api/modules/getallmodule';

  constructor(private http: HttpClient) {}

  getAllModules(page: number, size: number): Observable<Page<ModuleResponse>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<Page<ModuleResponse>>(this.apiUrl, { params });
  }

    private baseUrl = 'http://localhost:8089/declitech/api/modules';


  activerModule(id: number): Observable<void> {
    return this.http.patch<void>(`${this.baseUrl}/${id}/activate`, {});
  }

  desactiverModule(id: number): Observable<void> {
    return this.http.patch<void>(`${this.baseUrl}/${id}/deactivate`, {});
  }

  annulerModule(id: number): Observable<void> {
  return this.http.patch<void>(`${this.baseUrl}/${id}/cancel`, {});
}
assignModule(payload: {
  instructorId: number;
  moduleId: number;
  coBuildSpaceId: number;
  jour: string;
}): Observable<string> {
  return this.http.post(`${this.baseUrl}/assign-full`, payload, {
    responseType: 'text' as const
  });
}


}
