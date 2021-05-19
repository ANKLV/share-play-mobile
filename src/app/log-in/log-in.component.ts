import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionAPI } from '../../api';
import { Toastr } from "../../providers"
import { Auth } from "../../providers"

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

  constructor(private sessionAPI: SessionAPI, private router: Router, private toastr: Toastr, private auth: Auth) { }

  loginUser() {
    this.sessionAPI.create(this.loginForm.value).subscribe((data) => {
      this.toastr.success("Logged In");
      this.auth.updateUser(data);
      this.router.navigate(['/playlists']);
    }, (error) => {
      this.toastr.showResponseErrors(error)
    })
  }

}
