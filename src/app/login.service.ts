import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private endpoint = "/companies";
  private domain : string | undefined;

  constructor(private http: HttpClient) {
    this.domain = environment.authDomain;
  }

  login(login: string, password: string): Observable<any> {
    return this.http.get(`${this.domain}${this.endpoint}`, {
      headers: {
        'Authorization': `Basic ${btoa(`${login}:${password}`)}`
      }
    });
  }
}
