import { environment } from './../../../environments/environment';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${environment.api}/login`, user).toPromise();
    if (result && result.token) {
      window.localStorage.setItem('token', result.token);
      return true;
    }

    return false;
  }

  async createAccount(account: any) {
    const result = await this.http.post<any>(`${environment.api}/register`, account).toPromise();
    return result;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getExpiredDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp == undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getExpiredDate(token);

    if (date == undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }
    return true;
  }

  async getUsers(account: any){
    const result = await this.http.get<any>(`${environment.api}/users/`, account).toPromise();
    return result;
  }

  async getUsersById(id: any){
    const result = await this.http.get<any>(`${environment.api}/users/:${id}`).toPromise();
    return result;
  }

  async deslogar(user: any){
      window.localStorage.removeItem('token');
      return false;
   
  }
}
