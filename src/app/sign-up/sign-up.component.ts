import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAPI } from '../api';
import { Toast } from "../providers"
import { Auth } from "../providers"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  userForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    nickname: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    password_confirmation: new FormControl(null, Validators.required)
  })

  constructor(private userAPI: UserAPI, private toast: Toast, private router: Router, private auth: Auth) { }

  createUser() {
    this.userAPI.create({user: this.userForm.value}).subscribe((data) => {
      this.toast.show("Registered");
      this.auth.updateUser(data);
      this.router.navigate(['/tabs/tab2']);
    }, (error) => {
      console.log('error', error);
      this.toast.show("Invalid credentials")
    })
  }
}
