import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // ✅ Nouvelle URL correcte avec `/getlall`
  private apiUrl = 'http://localhost:8089/declitech/api/instructors/getlall';

  constructor(private http: HttpClient) {}

  getAllInstructors(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
