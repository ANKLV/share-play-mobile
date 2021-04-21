import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class PlaylistAPI {
  constructor(private http: HttpClient) {  }

  query(params = {}) {
    return this.http.get(`${environment.apiEndpoint}/api/v1/playlists`, { params: params });
  }

  create(params:any) {
    return this.http.post(`${environment.apiEndpoint}/api/v1/playlists`, params);
  }

  delete(id:number) {
    return this.http.delete(`${environment.apiEndpoint}/api/v1/playlists/${id}`);
  }

  update(id:number, params = {}) {
    return this.http.patch(`${environment.apiEndpoint}/api/v1/playlists/${id}`, params);
  }
}
