import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlaylistAPI } from '../api';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html'
})

export class PlaylistFormComponent {
  @Output() onCreate = new EventEmitter<any>();
  playlistForm = new FormGroup({
    title: new FormControl(null, Validators.required)
  })

  constructor(private playlistAPI: PlaylistAPI) { }

  createPlaylist() {
    this.playlistAPI.create({playlist: this.playlistForm.value}).subscribe((data) => {
      this.onCreate.emit(data);
      this.playlistForm.reset();
    }, (error) => {
      console.log('error', error);
    })
  }
}
