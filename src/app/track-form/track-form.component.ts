import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TrackAPI } from '../api';


@Component({
  selector: 'app-track-form',
  templateUrl: './track-form.component.html'
})

export class TrackFormComponent {
  @Output() onCreate = new EventEmitter<any>();
  trackForm = new FormGroup({
    audio: new FormControl(null, Validators.required)
  })
  audio:any;

  constructor(private trackAPI: TrackAPI) { }

  get trackParams() {
    return (
      {
        track: Object.assign(this.trackForm.value, {audio: this.audio})
      }
    );
  }

  createTrack() {
    this.trackAPI.create(this.trackParams).subscribe((data) => {
      this.onCreate.emit(data);
      this.trackForm.reset();
    }, (error) => {
      console.log('error', error);
    })
  }

  handleFileInput(event: any) {
    this.audio = event.target.files[0]
  }
}
