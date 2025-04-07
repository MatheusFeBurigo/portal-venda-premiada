import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { Observable } from "rxjs";
import { User } from "src/app/user-routine/register/model/User.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }  

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const token = localStorage.getItem('access_token');
      if (token) {
        const decodedToken: any = jwtDecode(token);
        const expirationDate = new Date(decodedToken.exp * 1000);
        return expirationDate > new Date();
      }
      return false;
    } 
    catch (error) {
      return false;
    }
  }
}
