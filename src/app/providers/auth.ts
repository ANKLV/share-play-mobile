import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Auth {

  readonly CURRENT_USER_KEY = 'currentUser';
  get currentUser():any {
    try {
      let data:any = window.localStorage.getItem(this.CURRENT_USER_KEY);
      return JSON.parse(data);
    } catch(_) {
      return null;
    }
  }

  get token() {
    return this.currentUser?.auth_token;
  }

  signOut() {
    window.localStorage.clear();
  }

  updateUser(data:any) {
    window.localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(data));
    return data;
  }
}
