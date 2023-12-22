import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  private endpoint = "/despesapadrao";
  private domain : string | undefined;

  constructor(private http: HttpClient) {
    this.domain = environment.domain;
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.domain}${this.endpoint}`);
  }

  getDespesa(id: string): Observable<any> {
    return this.http.get(`${this.domain}${this.endpoint}/bycod/${id}`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.domain}${this.endpoint}`, data);
  }

  putData(id: string, data: any): Observable<any> {
    return this.http.put(`${this.domain}${this.endpoint}/${id}`, data);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.domain}${this.endpoint}/${id}`);
  }
}
