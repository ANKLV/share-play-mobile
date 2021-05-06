import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditTrackModal } from '../edit-track-modal/edit-track-modal.component';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})

export class TrackListComponent {
  @Output() onAdd = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Input() tracks:any = [];
  @Input() showAddButton = false;
  @Input() editButton = true;
  @Input() showDeleteButton = true;
  currentTrack:any;

  constructor(public modalController: ModalController, private streamingMedia: StreamingMedia) { }

  get currentTrackIndex() {
    return this.tracks.map((track:any) => track.id).indexOf(this.currentTrack.id);
  }

  ngOnInit(): void {}

  async editModal(track) {
    const modal = await this.modalController.create({
      component: EditTrackModal,
      cssClass: 'my-custom-class',
      componentProps: {track:track}
    });
    await modal.present();
  }

  play(track:any) {
    let options:any = {
      orientation: 'landscape',
      shouldAutoClose: true,
    };

    this.streamingMedia.playAudio(track.url, options);
        console.log(track);
       (err) => {
        console.log(err)
    };
  }
}
