import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TrackAPI } from '../api';

@Component({
  selector: 'app-edit-track-modal',
  templateUrl: 'edit-track-modal.component.html',
  styleUrls: ['./edit-track-modal.component.scss']
})

export class EditTrackModal {
  @Input() track:any = {};

  constructor(private trackAPI: TrackAPI,
              private modalController: ModalController) { }

  dismiss(data?:any) {
    this.modalController.dismiss(data);
  }

  updateTrack(track:any) {
    this.trackAPI.update(track.id, {track}).subscribe(() => {
      track.edit = false;
      this.modalController.dismiss(track);
    })
  }
}
