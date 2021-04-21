import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class TrackAPI {
  constructor(private http: HttpClient) {  }

  query(params = {}) {
    return this.http.get(`${environment.apiEndpoint}/api/v1/tracks`, { params: params });
  }

  create(params:any) {
    return this.http.post(`${environment.apiEndpoint}/api/v1/tracks`, params);
  }

  delete(id:number) {
    return this.http.delete(`${environment.apiEndpoint}/api/v1/tracks/${id}`);
  }

  update(id:number, params = {}) {
    return this.http.patch(`${environment.apiEndpoint}/api/v1/tracks/${id}`, params);
  }
}
