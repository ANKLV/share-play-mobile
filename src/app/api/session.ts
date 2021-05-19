import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class SessionAPI {
  constructor(private http: HttpClient) {  }

  create(params:any) {
    return this.http.post(`${environment.apiEndpoint}/api/v1/sessions`, params);
  }
}
