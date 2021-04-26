import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PlaylistAPI } from '../api';
import { PlaylistTrackAPI } from '../api';
import { TrackAPI } from '../api';

@Component({
  selector: 'app-add-playlist-tracks-modal',
  templateUrl: 'add-playlist-tracks-modal.component.html',
  styleUrls: ['./add-playlist-tracks-modal.component.scss']
})

export class AddPlaylistTracksModal {
    playlistsTracks:any = [];
    playlists:any;
    playlistId:any;
    plTracks:any = [];
    tracks:any = [];

  constructor(private playlistTrackAPI: PlaylistTrackAPI,
              private modalController: ModalController,
              private trackAPI: TrackAPI,
              private route: ActivatedRoute
            ) { }

  ngOnInit(): void {
    this.playlistId = this.route.snapshot.paramMap.get('id');
    this.loadTracks();
  }

  dismiss(data?:any) {
    this.modalController.dismiss(data);
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
    })
  }
}
