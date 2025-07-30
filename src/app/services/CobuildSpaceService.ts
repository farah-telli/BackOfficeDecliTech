import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CobuildSpace {
  spaceId: number;
  name: string;
  address: string;
  actif: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CobuildSpaceService {
  private baseUrl = 'http://localhost:8089/declitech/api/cobuildSpaces';

  constructor(private http: HttpClient) {}

  getAllCobuildSpaces(): Observable<CobuildSpace[]> {
    return this.http.get<CobuildSpace[]>(this.baseUrl);
  }
}
