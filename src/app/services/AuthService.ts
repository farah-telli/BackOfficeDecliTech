import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8089/declitech/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  loginWithPhone(data: { phone: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.baseUrl}/login-phone`, data)
      .pipe(
        tap(response => {
          this.storeToken(response.token);
        }),
        catchError(err => {
          console.error('Login failed', err);
          return throwError(err);
        })
      );
  }


  
  private storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in']); 
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  loginWithEmail(data: { email: string; password: string }) {
    return this.http.post<{ token: string }>(
      `${this.baseUrl}/login-email`,
      data
    ).pipe(
      tap(response => {
        this.storeToken(response.token); // stockage du token
      }),
      catchError(err => {
        console.error('Erreur de login email:', err);
        return throwError(() => err);
      })
    );
  }


sendVerificationCode(data: { phoneNumber: string }): Observable<string> {
  return this.http.post(`${this.baseUrl}/send-code`, data, { responseType: 'text' });
}

verifyCode(data: { phoneNumber: string; code: string }): Observable<string> {
  return this.http.post(`${this.baseUrl}/verify-code`, data, { responseType: 'text' });
}

resetCode(data: { phoneNumber: string; code: string; confirmCode: string }): Observable<string> {
  return this.http.post(`${this.baseUrl}/reset-code`, data, { responseType: 'text' });
}

 activerModule(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/activer/${id}`, {});
  }

  desactiverModule(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/desactiver/${id}`, {});
  }

  annulerSeance(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/annuler/${id}`, {});
  }
  getAllModules() {
  return this.http.get<any[]>(`${this.baseUrl}`);
}

}