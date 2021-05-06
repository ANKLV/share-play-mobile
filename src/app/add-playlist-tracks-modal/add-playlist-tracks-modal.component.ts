import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlaylistTrackAPI, TrackAPI  } from '../api';
import { Toast } from "../providers"

@Component({
  selector: 'app-add-playlist-tracks-modal',
  templateUrl: 'add-playlist-tracks-modal.component.html',
  styleUrls: ['./add-playlist-tracks-modal.component.scss']
})

export class AddPlaylistTracksModal {

    @Input() playlistId:number;
    playlistsTracks:any = [];
    playlists:any;
    plTracks:any = [];
    tracks:any = [];

  constructor(private playlistTrackAPI: PlaylistTrackAPI,
              private modalController: ModalController,
              private trackAPI: TrackAPI,
              private toast: Toast) { }

  ngOnInit(): void {
    this.loadTracks();
  }

  dismiss(data?:any) {
    this.modalController.dismiss(data);
    this.loadTracks();
  }

  loadTracks(query?:any) {
    const params = query ? {query: query} : {};

    this.trackAPI.query(params).subscribe((data) => {
      this.tracks = data;
    }, (error) => {
      console.log('error', error);
    })
  }

  addTrack(track:any) {
    this.playlistTrackAPI.create({playlist_track: {track_id: track.id, playlist_id: this.playlistId }}).subscribe((data:any) => {
      this.playlistsTracks.push(data);
      this.plTracks.push(data.track);
      this.toast.show('Added!');
    })
  }

  search(event:any) {
    this.loadTracks(event.target.value);
  }
}
