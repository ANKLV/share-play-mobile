import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAPI } from '../../api';
import { Toastr } from "../../providers"
import { Auth } from "../../providers"

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

  constructor(private userAPI: UserAPI, private toastr: Toastr, private router: Router, private auth: Auth) { }

  createUser() {
    this.userAPI.create({user: this.userForm.value}).subscribe((data) => {
      this.toastr.success("Registered");
      this.auth.updateUser(data);
      this.router.navigate(['/playlists']);
    }, (error) => {
      console.log('error', error);
      this.toastr.showResponseErrors(error)
    })
  }
}
