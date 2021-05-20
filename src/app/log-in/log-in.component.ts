import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionAPI } from '../api';
import { Toast } from "../providers"
import { Auth } from "../providers"

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(private sessionAPI: SessionAPI, private router: Router, private toast: Toast, private auth: Auth) { }

  loginUser() {
    this.sessionAPI.create(this.loginForm.value).subscribe((data) => {
      this.toast.show("Logged In");
      this.auth.updateUser(data);
      this.router.navigate(['/tabs/tab2']);
    }, (error) => {
      console.log('error', error);
      this.toast.show("Invalid credentials")
    })
  }

}
