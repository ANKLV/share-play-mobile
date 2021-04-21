import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlaylistAPI } from '../api';

@Component({
  selector: 'app-create-playlist-modal',
  templateUrl: 'create-playlist-modal.component.html',
  styleUrls: ['./create-playlist-modal.component.scss']
})
export class CreatePlaylistModal {
  createPlaylistModal = new FormGroup({
    title: new FormControl(null, Validators.required)
  })

  constructor(private playlistAPI: PlaylistAPI,
              private modalController: ModalController) { }

  createPlaylist() {
    this.playlistAPI.create({playlist: this.createPlaylistModal.value}).subscribe((data) => {
      this.createPlaylistModal.reset();
      this.dismiss(data);
    }, (error) => {
      console.log('error', error);
    })
  }

  dismiss(data?:any) {
    this.modalController.dismiss(data);
  }
}
