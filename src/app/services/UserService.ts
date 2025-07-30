// src/app/services/UserService.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { User } from '../models/user';
import { Instructor } from '../models/ModuleSession';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8089/declitech/api/instructors';

  constructor(private http: HttpClient) {}

  getAllInstructors(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/getall`);
  }
}
